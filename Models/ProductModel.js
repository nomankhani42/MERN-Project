const Mongoose=require('mongoose');
const {Schema}=Mongoose;

let ProductSchema=new Schema({
    
    title: {type:String , required:[true,'Title is Empty']},
    description: {type:String , required:[true,'Please Give The Description About Product']},
    price: {type:Number , required:[true,'Price Error'],min:[10,'Price Atleast be 10']},
    
    rating: {type:Number , default:0,min:[0,'Rating Min Error'],max:[5,'rating max error']},
    
    brand: {type:String },
    category: {type:String },
    thumbnail: {type:String , required:[true,'Thumbnail Error']},
    images: [String]
  })

  exports.Product=Mongoose.model('Product',ProductSchema);