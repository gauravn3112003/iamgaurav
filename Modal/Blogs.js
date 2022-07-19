import mongoose,{models} from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  category:String,
  author: {
    type: String,
    default: "Gaurav Narnaware",
  },
  image: String,
  description:String,
  artical:String,
  date: {
    type: Date,
    default: Date.now,
  },



});



export default mongoose.models.blog || mongoose.model('blog', blogSchema)