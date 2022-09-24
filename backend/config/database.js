const mongoose = require('mongoose')


const connectDatabase = () =>{
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/ecommerce-demo').then((data)=>{
        console.log('db connect success')
    }).catch((err)=>{
        console.log(err)
    })
}
 module.exports = connectDatabase