const { ObjectId } = require("mongodb")
const db = require("../connection")

async function AddUser(req,res){
    console.log(req.body)
    let {email,password,fullname,mobile,gender,state,city} = req.body
    let collection = 'user_signup'
    let document = await db.collection(collection).findOne({ email: email, fullname: fullname})
    if(document) {
        res.json({ error: 'User already exists', message: '' })
    } else {
        try {
            await db.collection(collection).insertOne({ email: email, password:password,fullname:fullname,mobile:mobile,gender:gender,state:state,city:city})
            res.json({ error: '', message: 'User added successfully' })
        }catch(e){
            res.json({ error: e.message, message: '' })
        }
    }
}

async function UserSIgnIn(req,res){
    console.log(req.body)
    let {email,password} = req.body
    let collection = 'user_signup'
    let document = await db.collection(collection).findOne({ email: email, password:password})
    if(document) {
        res.json({ error: '', message: 'User signed in successfully' })
    } else {
        res.json({ error: 'Invalid email or password', message: '' })
    }
}
module.exports={
    AddUser,
    UserSIgnIn,

}