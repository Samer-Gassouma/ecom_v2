import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  _id: {type:mongoose.Types.ObjectId, auto:true},
  title: {type:String},
  description: String,
  price: {type: Number},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
  reviews: [{type:mongoose.Types.ObjectId, ref:'Review'}],
  numReviews: {type:Number, default:0},
  stock: {type:Number, default:0},
  sold: {type:Number, default:0},
  shipping: {type:String, enum:['Yes', 'No']},
  color: {type:String, enum:['Black', 'Brown', 'Silver', 'White', 'Blue']},
  discount: {type:Number, default:0},
  isOffer: {type:Boolean, default:false},
  starRatings: {type:Number, default:0},
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);