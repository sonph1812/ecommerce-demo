const  Product = require('../model/product')


//createProduct - admin

exports.createProduct = async (req,res,next)=>{
    const  product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}
//Get all
exports.getAllProducts = async (req,res)=>{
    const product = await Product.find()
    res.status(200).json({message:'true',product})
}
//Update -- admin
exports.updateProduct = async (req,res,next)=> {
    let product = Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"

        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModifiy: false
    });
    res.status(200).json({
        success: true,
        product
    })
}
//Delete

    exports.deleteProduct = async (req, res,next) => {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product not found"

            })
        }
        await product.remove()
        res.status(200).json({
            success: true,
            message: "delete success"
        })

}
//Get product details
 exports.getProductDetails = async (req,res,next)=>{
     const product = await Product.findById(req.params.id);
     if (!product) {
         return res.status(500).json({
             success: false,
             message: "Product not found"

         })
     }
     res.status(200).json({
         success: true,
         message: "product details"
     })

 }