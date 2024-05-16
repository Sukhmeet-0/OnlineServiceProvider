// const { default: Category } = require('../../frontend/src/pages/admin/Category')
// const connect = require('../connection')
// const db=await connect()
// const collection = db.collection('category')
// const item = {id:1,CategoryName:'Computer technician'}
// const result = await collection.insertMany(item)


const { ObjectId } = require("mongodb")
const db = require("../connection")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


async function AddCategory(req, res) {

    
    try {
        console.log(req.body)
        const { categoryName } = req.body;

        const collection = "category";
        await db.collection(collection).insertOne({ categoryName: categoryName })
        res.json({ error: '', message: 'Category Added.' });
    } catch (e) {
        res.json({ error: e.message, message: '' });
    }
}

async function ReadCategory(req, res) {
    const collection = 'category'
    try {

        let documents = await db.collection(collection).find().toArray()
        res.json({ error: '', documents: documents })


    } catch (e) {
        // console.log(e)
        res.json({ error: e.message, documents: [] })
    }


}
async function DeleteCategory(req, res) {
    try {
        console.log(req.params)
        let { _id } = req.params
        let collection = "category"
        let filter = { _id: new ObjectId(_id) }
        let result = await db.collection(collection).deleteOne(filter)
        res.json({ error: '', message: 'Document Deleted.' })
    } catch (e) {
        res.json({ error: e.message, message: '' })
    }
}

async function AdminLogin(req, res) {
    console.log(req.body)
    let { email, password } = req.body
    if (email == "" || password == "") {
        res.json({ error: 'All fields are required', message: '' })
    } else {

        try {
            const adminCollection = db.collection('admin');


            const user = await adminCollection.findOne({ email:email,password:password });

            if (!user) {
                return res.status(400).json({ error: "Invalid Email or Password", message: "" });
            }


            const isPasswordValid = bcrypt.compare(password, user.password)
            // console.log(password)
            // console.log(user.password)

            if (!isPasswordValid) {
                return res.status(400).json({ error: "Invalid Email or Password", message: "" });
            }

            const payload = {
                id: user._id,
                email: user.email,
                fullName: user.fullname
            };

            const secret = "abc@123";
            const expiry = 60 * 60;


            const token = jwt.sign(payload, secret, { expiresIn: expiry });
            // console.log(token);

            // res.cookie('customerToken', token, {
            //     expires: new Date(Date.now() + expiry * 1000)
            // });

            return res.json({ error: "", message: "Login Success", token: token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message, message: "" });
        }
    }

}
async function AdminChangePassword(req, res) {
    // console.log(req.adminInfo)
    // console.log(req.body)

    let { id } = req.adminInfo
    let { password, newpassword, confirmpassword } = req.body
    let collection = 'admin'
    let filter = { _id: new ObjectId(id) }

    let document = await db.collection(collection).findOne(filter)
    console.log(document)

    if(document.password !== password) {
        res.json({ error: 'Invalid old password', message: '' })
    } else {
        if (newpassword !== confirmpassword) {
            res.json({ error: 'New password and confirm password must be same', message: '' })
        } else {
            try {
                // let { id } = req.params
                
                let updateData = {
                    password: newpassword
                }
                await db.collection(collection).updateOne(filter, { $set: updateData })
                res.json({ error: '', message: 'password changed successfully' })
            } catch (e) {
                res.json({ error: e.message, message: '' })
            }
        }
    }
    // res.json({error:'',message:''})
}
async function SubCategory(req, res) {
    try {
        const { categoryName, subCategory } = req.body;
        const category = await db.collection('category').findOne({ categoryName: categoryName });

        if (!category) {
            return res.status(404).json({ error: 'Category not found', message: '' });
        }

        let subCategories = category.subCategory || [];
        subCategories.push({ name: subCategory });
        await db.collection('category').updateOne(
            { categoryName: categoryName },
            { $set: { subCategory: subCategories } }
        );

        res.json({ error: '', message: 'Subcategory added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message, message: '' });
    }
}


async function DeleteSubCategory(req, res) {
    try {
        let { _id, categoryName, subCategoryName } = req.params;
        let updateData = {
            categoryName: categoryName,
            $pull: { subCategory: { name: subCategoryName } }
        };
        let collection = "category";
        let filter = { _id: new ObjectId(_id), categoryName: categoryName };
        let result = await db.collection(collection).updateOne(filter, updateData);
        res.json({ error: '', message: 'Category Deleted.' });
    } catch (e) {
        res.json({ error: e.message, message: '' });
    }
}
async function ReadSubCategory(req,res){
    const categoryName = req.params.categoryName;
    // console.log(categoryName)
    try {
        // Assuming db.collection is a MongoDB collection object
        const category = await db.collection('category').findOne({ categoryName: categoryName });
        if (!category) {
            return res.status(404).json({ error: "Category not found", subCategory: [] });
        }else if(category.subCategory){

            res.json({ subCategory: category.subCategory});
        }else{
            res.json({ subCategory: []});
        }
    } catch (error) {
        console.error("Error fetching subcategories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    AddCategory,
    ReadCategory,
    DeleteCategory,
    AdminLogin,
    AdminChangePassword,
   SubCategory,
   DeleteSubCategory,
   ReadSubCategory,

}