const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please enter Product name"],
        trim: true
    },
    description: {
        type: String,
        require: [true, "please enter Product description"]
    },
    price: {
        type: Number,
        require: [true, "please enter Product price"],
        maxLength: [8, "Price can not longer than 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        },
    }],
    category: {
        type:String,
        require:[true,'Please Enter Product Category']

    },
    stock:{
        type:Number,
        require:[ true,'Please Enter Product Stock'],
        maxLength: [4,"stock cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                require:true,
            },
            rating:{
                type:Number,
                require:true
            },
            comment:{
                type:String,
                require:true
            }

        }

    ],
    createAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product",productSchema)