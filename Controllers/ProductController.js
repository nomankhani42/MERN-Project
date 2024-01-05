const Model=require('../Models/ProductModel');

const Product=Model.Product;

exports.postProduct=async (req,res)=>{
//    console.log(req.body)
  const result=await new Product(req.body);

      result.save()
      .then((doc)=>{
        console.log(doc)
      })
      .catch((err)=>{
        console.log(err)
      })
     



}

exports.getAllProducts=async (req,res)=>{

    try{
        const result=await Product.find();
        res.json(result)
    }
    catch(err){
        res.json(err)
        console.log(err)
    }
}
exports.getProduct=async (req,res)=>{
    const id=req.params.id;
    try{
        const result=await Product.find({_id:id});
        res.json(result)
    }
    catch(err){
        res.json(err)
        console.log(err)
    }
}


exports.replaceProduct=async (req,res)=>{
      const id=req.params.id;
    try{
        const result=await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}

exports.updateProduct=async (req,res)=>{
    const id=req.params.id;
  try{
      const result=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
      res.json(result)
  }
  catch(err){
      res.json(err)
  }
}
exports.deleteProduct=async (req,res)=>{
    const id=req.params.id;
  try{
      const result=await Product.findOneAndDelete({_id:id})
      res.send('Deleted')
    
  }
  catch(err){
      res.json(err)
  }
}