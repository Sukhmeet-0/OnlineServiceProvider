var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var path = require('path');;
var {conn} = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fetchcategories', function(req, res, next) {
let query =  `select * from category`;

conn.query(query, function(err, results) {
  if (err) {
    res.json({ans : []});
  }
  else
  {
    res.json({ans : results})
  }
})
})

router.post('/checklogin', (req, res) => {
  const useremail = req.session.useremail;

  if (!useremail) {
    res.send('fail');
  } else {
    res.send('success');
  }
});

router.get("/view_subcategories",(req,res)=>
{
  res.render('view_subcategories');
});

router.post('/fetch_subcategory', function(req, res) {
let {category} = req.body;
  let query =  `select * from subcategory where category = '${category}'`;

  conn.query(query, function(err, results) {
    if (err) {
      console.log(err.message);
      res.json({ans : []});
    }
    else
    {
      res.json({ans : results});
    }
  })
})

router.get("/user_login", (req, res) => {
  res.render('user_login');
})

router.post('/userlogin', (req, res) => {
  const { email, password } = req.body;
console.log(req.body);
  const query = 'SELECT * FROM users WHERE useremail = ? AND password = ?';

  conn.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length > 0) {
      req.session.useremail = email;
      return res.send('success');
    } else {
      return res.send('fail');
    }
  });
});

router.get("/user_home", (req, res) => {
  res.render("user_home");
})

router.get("/all_venders",(req,res)=>{
  res.render('all_venders');
});

router.post('/fetch_vendors', (req, res) => {
  const { subcategory } = req.body;

  const query = 'SELECT * FROM serviceprovider WHERE subcategory = ? AND status = "approve"';

  conn.query(query, [subcategory], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ans:[]});
    }

    res.json({ans : results});
  });
});

router.post('/fetchsinglevender', (req, res) => {
  const { email } = req.body;

  const query = 'SELECT * FROM serviceprovider WHERE email = ?';

  conn.query(query, [email], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ans : []});
    }

    res.json({ans : results});
  });
});


// Route to fetch gallery data
router.post('/fetchgallery', (req, res) => {
  // Extract the email from the request body
  const { email } = req.body;

  // Define the SQL query
  const query = 'SELECT * FROM managegallery WHERE email = ?';

  // Execute the query with the email as a parameter
  conn.query(query, [email], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ans : []});
    }

    // Return the results as JSON
    res.json({ans : results});
  });
});

router.get('/managebookings',(req,res)=>{
  res.render('managebookings');
})

router.get('/single_vender',(req,res)=>{
  res.render('single_vender');
})

// Route to fetch reviews
router.post('/fetchreviews', (req, res) => {
  // Extract the email from the request body
  const { email } = req.body;

  // Define the SQL query
  const query = 'SELECT * FROM rating WHERE venderemail = ?';

  // Execute the query with the email as a parameter
  conn.query(query, [email], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ans : []});
    }

    // Return the results as JSON
    res.json({ans : results});
  });
});

// Route to add a review
router.post('/addrev', (req, res) => {
  const { email, description, rate } = req.body;
  const useremail = req.session.useremail;

  if (!useremail) {
    return res.status(403).send('Unauthorized');
  }

  try {
    // Define the SQL query
    const query = 'INSERT INTO rating (useremail, venderemail, suggestions, rating) VALUES (?, ?, ?, ?)';
    const values = [useremail, email, description, rate];

    // Execute the query
    conn.query(query, values, (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Internal Server Error');
      }

      res.send('Success');
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/fetchbookingdetails', (req, res) => {
  const { email, date } = req.body;
  let price_per_hrs = 0, start_hrs = 0, end_hrs = 0;
  const jsonobj = {};

  console.log("date --->", date);

  try {
    const query1 = 'SELECT * FROM serviceprovider WHERE email = ?';
    conn.query(query1, [email], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (results.length > 0) {
        const provider = results[0];
        price_per_hrs = parseInt(provider.price_per_hrs);
        start_hrs = parseInt(provider.start_hrs);
        end_hrs = parseInt(provider.end_hrs);
      }

      jsonobj.price_per_hrs = price_per_hrs;

      const jsonarray = [];
      const fetchBookingDetails = (start_hrs, end_hrs, callback) => {
        let i = start_hrs;
        const iterate = () => {
          if (i < end_hrs) {
            const obj = { start_hrs: i, end_hrs: i + 1 };
            const query2 = `
              SELECT * FROM booking_details 
              WHERE start_slot = ? 
              AND bookid IN (
                SELECT bookid FROM booking 
                WHERE date = ? AND venderemail = ?
              )
            `;
            conn.query(query2, [i, date, email], (err, results) => {
              if (err) {
                console.error('Database query error:', err);
                return res.status(500).send('Internal Server Error');
              }

              if (results.length > 0) {
                obj.status = "booked";
              } else {
                obj.status = "available";
              }

              jsonarray.push(obj);
              i++;
              iterate();
            });
          } else {
            callback();
          }
        };
        iterate();
      };

      fetchBookingDetails(start_hrs, end_hrs, () => {
        jsonobj.ans = jsonarray;
        res.json(jsonobj);
      });
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

// Function to send email
const sendEmailWithAttachment = (to, subject, text, attachmentPath) => {
  const mailOptions = {
    from: 'nirbhay@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Route to handle booking
router.post('/booking', (req, res) => {
  const { date, status, email, price, slots } = req.body;
  const useremail = req.session.useremail;

  console.log("----->", date, useremail, status, email, price, slots);

  if (!useremail) {
    return res.status(403).send('Unauthorized');
  }

  try {
    const price1 = parseInt(price);
    if (price1 <= 0) {
      return res.send("fail");
    }

    // Insert into booking table
    const insertBookingQuery = 'INSERT INTO booking (date, venderemail, useremail, Total_Price, payment_type) VALUES (?, ?, ?, ?, ?)';
    conn.query(insertBookingQuery, [date, email, useremail, price1, status], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Internal Server Error');
      }

      const bid = result.insertId;

      // Insert into booking_details table
      const insertBookingDetailsQuery = 'INSERT INTO booking_details (start_slot, end_slot, bookid) VALUES ?';
      const slotTokens = slots.split(',').map(slot => {
        const start_slot = parseInt(slot);
        return [start_slot, start_slot + 1, bid];
      });

      conn.query(insertBookingDetailsQuery, [slotTokens], (err, result) => {
        if (err) {
          console.error('Database query error:', err);
          return res.status(500).send('Internal Server Error');
        }

        // Send confirmation email
        sendEmailWithAttachment(useremail, `${email} ${date}`, `Slot Booked Successfully. Amount paid ${price}`, 'path_to_attachment/vendor.jpg');

        res.send("success");
      });
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/payment_success',(req,res)=>{
  res.render('payment_success');
})

router.get('/user_bookings', (req,res)=>{
  res.render('user_bookings');
});

router.post('/userbookings', (req, res) => {
  const useremail = req.session.useremail;
  if (!useremail) {
    return res.status(403).send('Unauthorized');
  }

  let main = {};
  let array = [];

  conn.query('SELECT * FROM booking WHERE useremail = ?', [useremail], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    let bookingPromises = results.map(booking => {
      return new Promise((resolve, reject) => {
        let obj = {
          bookid: booking.bookid,
          date: booking.date,
          venderemail: booking.venderemail,
          useremail: booking.useremail,
          Total_Price: booking.Total_Price,
          payment_type: booking.payment_type
        };

        // Get username and photo
        conn.query('SELECT * FROM users WHERE useremail = ?', [booking.useremail], (err, userResults) => {
          if (err) {
            return reject(err);
          }

          if (userResults.length > 0) {
            obj.username = userResults[0].username;
            obj.photo = userResults[0].photo;
          }

          // Get booking details
          conn.query('SELECT * FROM booking_details WHERE bookid = ?', [booking.bookid], (err, detailsResults) => {
            if (err) {
              return reject(err);
            }

            detailsResults.forEach(detail => {
              obj.start_slot = detail.start_slot;
              obj.end_slot = detail.end_slot;
            });

            array.push(obj);
            resolve();
          });
        });
      });
    });

    Promise.all(bookingPromises)
        .then(() => {
          main.ans = array;
          res.json(main);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Database error');
        });
  });
});

// Route to handle user signup
router.post('/usersignup', (req, res) => {
  const { username, password, email, phone, secquestion, secanswer } = req.body;
  console.log(req.files)
    let {photo} = req.files;

  if (!photo) {
    return res.status(400).send('Photo is required');
  }

  const uploadPath = path.join(__dirname, '..', 'public', 'photos', photo.name);


  // Save the file
  photo.mv(uploadPath, err => {
    if (err) {
      return res.status(500).send(err);
    }

    // Check if the user already exists
    conn.query('SELECT * FROM users WHERE useremail = ?', [email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }

      if (results.length > 0) {
        return res.send('exist');
      } else {
        // Insert new user
        const photoPath = `/photos/${photo.name}`;
        const query = `INSERT INTO users (username, password, useremail, phone, photo, secquestion, secanswer) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [username, password, email, phone, photoPath, secquestion, secanswer];
        console.log(query)
        console.log(values)
        conn.query(query, values, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Database error');
          }
          res.send('success');
        });
      }
    });
  });
});

router.get('/user_signup',(req,res)=>{
  res.render('user_signup');
});

router.get('/changepassword',(req,res)=>{
  res.render('changepassword');
})

router.post('/checkpass', (req, res) => {
  const email = req.session.useremail;

  if (email) {
    res.send(email);
  } else {
    res.status(401).send('No user email found in session');
  }
});

// Route to handle changepass
router.post('/changepass', (req, res) => {
  const { email, password } = req.body;

  const querySelect = 'SELECT * FROM users WHERE useremail = ?';
  conn.query(querySelect, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
      const queryUpdate = 'UPDATE users SET password = ? WHERE useremail = ?';
      conn.query(queryUpdate, [password, email], (err, updateResults) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Database error');
        }

        res.send('success');
      });
    } else {
      res.send('null');
    }
  });
});

router.get("/admin_login",(req,res)=>{
  res.render("admin_login");
})

router.get("/Admin_home",(req,res)=>{
  res.render("Admin_home");
})

// Route to handle admin login
router.post('/adminlogin', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM admin WHERE adminemail = ? AND password = ?';
  conn.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
      req.session.adminemail = email;
      res.send('success');
    } else {
      res.send('Fail');
    }
  });
});

// Route to fetch vendors
router.post('/fetchvenders', (req, res) => {
  const query = 'SELECT * FROM serviceprovider';
  conn.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ans : []});
    }
    res.json({ans : results});
  });
});

// Route to change status
router.post('/change_status', (req, res) => {
  const { email, status } = req.body;
  const query = 'UPDATE serviceprovider SET status = ? WHERE email = ?';
  conn.query(query, [status, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Service provider not found');
    }
    res.send('Success');
  });
});

router.post('/venderlogin', (req, res) => {
  const { email, password } = req.body;

  conn.query(
      'SELECT * FROM serviceprovider WHERE email = ? AND password = ?',
      [email, password],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Server error');
        }

        if (results.length > 0) {
          const status = results[0].status;
          if (status === 'approve') {
            req.session.email = email;
            console.log(req.session.email);
            return res.send('success');
          } else {
            return res.send('fail');
          }
        } else {
          return res.send('fail');
        }
      }
  );
});

router.post('/venderbookings', async (req, res) => {
  const { email } = req.session;

  try {
    const results = await new Promise((resolve, reject) => {
      conn.query(
          'SELECT * FROM booking WHERE venderemail = ?',
          [email],
          (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          }
      );
    });

    const bookings = [];

    for (const row of results) {
      const booking = {
        bookid: row.bookid,
        date: row.date,
        venderemail: row.venderemail,
        useremail: row.useremail,
        Total_Price: row.Total_Price,
        payment_type: row.payment_type
      };

      const userResults = await new Promise((resolve, reject) => {
        conn.query(
            'SELECT * FROM users WHERE useremail = ?',
            [row.useremail],
            (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            }
        );
      });

      if (userResults.length > 0) {
        booking.username = userResults[0].username;
        booking.photo = userResults[0].photo;
      }

      const detailsResults = await new Promise((resolve, reject) => {
        conn.query(
            'SELECT * FROM booking_details WHERE bookid = ?',
            [row.bookid],
            (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            }
        );
      });

      if (detailsResults.length > 0) {
        booking.start_slot = detailsResults[0].start_slot;
        booking.end_slot = detailsResults[0].end_slot;
      }

      bookings.push(booking);
    }

    res.json({ ans : bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get("/vender_login",(req,res)=>{
  res.render("vender_login");
})

router.get("/vender_signup",(req,res)=>{
  res.render("vender_signup");
})

router.get("/vender_bookings",(req,res)=>{
  res.render("vender_bookings");
});

router.get("/gallery",(req,res)=>{
  res.render("gallery");
});

router.post('/fetchsinglevender', (req, res) => {
  const { email } = req.body;

  conn.query(
      'SELECT * FROM serviceprovider WHERE email = ?',
      [email],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Server error' });
        }

        if (results.length > 0) {
          res.json({ans: results[0]});
        } else {
          res.status(404).json({ error: 'Provider not found' });
        }
      }
  );
});

// Route to handle fetching gallery
router.post('/fetchgallery', (req, res) => {
  const { email } = req.body;

  // Execute SQL query to fetch gallery based on email
  conn.query(
      'SELECT * FROM managegallery WHERE email = ?',
      [email],
      (err, results) => {
        if (err) {
          console.error('Error executing SQL query:', err);
          res.status(500).send('Server error');
          return;
        }

        // Convert results to JSON and send response
        res.json({ans: results});
      }
  );
});

// Route to handle adding to gallery
router.post('/addgall', (req, res) => {
  const { email } = req.body;
  const photo = req.files ? req.files.f69 : null;

  const uploadPath = path.join(__dirname, '..', 'public', 'gallery', photo.name);

  // Save the file
  photo.mv(uploadPath, err => {
    if (err) {
      return res.status(500).send(err);
    }


    const photoPath = `/gallery/${photo.name}`;
    // Execute SQL query to insert into managegallery
    conn.query(
        'INSERT INTO managegallery (caption, photo, email) VALUES (?, ?, ?)',
        ['Excellent', photoPath, email],
        (err, results) => {
          if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).send('Server error');
            return;
          }

          // Send success response
          res.send('Success');
        }
    );
  });
});

router.post('/vendersignup', (req, res) => {
  const {
    text,
    name,
    email,
    password,
    phone,
    website,
    subcategory,
    description,
    city,
    price,
    start,
    end,
    latitude,
    longitude,
    address
  } = req.body;
  
  console.log(req.body);
  const photo = req.files ? req.files.photo : null;

  console.log(photo)

  const uploadPath = path.join(__dirname, '..', 'public', 'vendor', photo.name);

  // Save the file
  photo.mv(uploadPath, err => {
    if (err) {
      return res.status(500).send(err);
      console.log(err);
    }


    const photoPath = `/vendor/${photo.name}`;

    conn.query('SELECT * FROM serviceprovider WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
     
      }

      if (results.length > 0) {
        return res.send('fail');
      } else {
        const query = `INSERT INTO serviceprovider 
        (name, email, password, phone, website, subcategory, description, city, photo, price_per_hrs, start_hrs, end_hrs, longitude, latitude, address, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [name, email, password, phone, website, text, description, city, photoPath, price, start, end, longitude, latitude, address, 'approve'];

        conn.query(query, values, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Database error');
          }
          res.send('success');
        });
      }
    });
  });
});

router.post("/fetchsub",(req,res)=>{
  conn.query(
    'SELECT * FROM subcategory',
    (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).send('Server error');
        return;
      }
      // Convert results to JSON and send response
      res.json({ans: results});
    }
);
})
module.exports = router;
