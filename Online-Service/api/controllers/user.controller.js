const { ObjectId } = require("mongodb")
const db = require("../connection")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function AddUser(req, res) {
    console.log(req.body)
    let { email, password, fullname, mobile, gender, state, city } = req.body
    let collection = 'user_signup'
    let document = await db.collection(collection).findOne({ email: email, fullname: fullname })
    if (document) {
        res.json({ error: 'User already exists', message: '' })
        // Qual.errordb('Error',res.error)
    } else {
        try {
            await db.collection(collection).insertOne({ email: email, password: password, fullname: fullname, mobile: mobile, gender: gender, state: state, city: city })
            res.json({ error: '', message: 'User added successfully' })
            // Qual.success('Registered',res.message)
        } catch (e) {
            res.json({ error: e.message, message: '' })
        }
    }
}

async function UserSIgnIn(req, res) {
    console.log(req.body)
    let { email, password } = req.body
    if (email == "" || password == "") {
        res.json({ error: 'All fields are required', message: '' })
    }
    else {
        try{
            let collection = 'user_signup'
            let document = await db.collection(collection).findOne({ email: email, password: password })
            if(!document){
                return res.status(400).json({ error: "Invalid Email or Password", message: "" });
            }
            const isPasswordValid=bcrypt.compare(password,document.password)
            if(!isPasswordValid){
                return res.status(400).json({ error: "Invalid Email or Password", message: "" });
            }
            const payload = {
                id: document._id,
                email: document.email,
                fullname: document.fullname
            };
            const secret = "abc@123";
            const expiry = 60 * 60*24;
            const token = jwt.sign(payload, secret, { expiresIn: expiry });
            
            return res.json({error: "",message:"login success",token:token})

        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message,message:""})
        }
    }
}

module.exports = {
    AddUser,
    UserSIgnIn,

}