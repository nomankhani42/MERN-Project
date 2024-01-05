const express=require('express');
const Controller=require('../Controllers/ProductController')

const productRouter=express.Router();

productRouter.post('/',Controller.postProduct)
.get('/',Controller.getAllProducts)
.get('/:id',Controller.getProduct)
.put('/:id',Controller.replaceProduct)
.patch('/:id',Controller.updateProduct)
.delete('/:id',Controller.deleteProduct)



exports.productRouter=productRouter;