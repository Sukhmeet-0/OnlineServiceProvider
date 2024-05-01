// imports
const express = require('express')
const mysql = require('mysql')
const connection = require('./connection')
const adminController = require('./controllers/admin.controller')
const cors = require('cors')
const {verify} = require('jsonwebtoken')
const userController = require('./controllers/user.controller')
const app = express()
app.use(cors());
app.use(express.json())



// admin token verification
function adminAuthorization_HTTP_Request(req, res, next) {
    console.log(req.body)
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['adminInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

// Default index page 
app.get('/',(req,res)=>{
    res.send('Response from server')
})


// Admin api's
app.get('/category',adminController.ReadCategory)
app.post('/category',adminController.AddCategory)
app.delete('/category/:_id',adminController.DeleteCategory)
app.post('/adminlogin',adminController.AdminLogin)
app.post('/changepassword',adminAuthorization_HTTP_Request,adminController.AdminChangePassword)
app.post('/subcategory',adminController.SubCategory)
app.delete('/subcategory/:_id',adminController.DeleteSubCategory)



// User api's
app.post('/usersignup',userController.AddUser)
app.post('/usersignin',userController.UserSIgnIn)





const port = 1699
app.listen(port,(error)=>{
    if(error){
        console.log(error.message)

    }else{
        console.log('Server in running')
    }
})