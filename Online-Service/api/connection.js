// const mysql = require('mysql')
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:"",
//     database:'Online_service_provider'
// })
// connection.connect((error)=>{
//     if(error){
//         console.log(error.message)
//     }else{
//         console.log('DB connected')
//     }
// })
// module.exports = connection



const { MongoClient } = require("mongodb");

const dbURI = "mongodb://0.0.0.0:27017";
const client = new MongoClient(dbURI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
connectToDatabase().then();

const dbName = "Online_service_provider"; // Replace with your database name
let db = client.db(dbName)

// module.exports = {client, dbName, db};
module.exports = db;

