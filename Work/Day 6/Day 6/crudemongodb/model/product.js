import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, 
  description: String,
  price: Number,
  audio_features:{
    headphone_jack:Boolean,
    microphone_jack: Boolean,
   num_of_speaker: Number,
   inbuilt_speakers:String 
  },
  dimensiones :{
    width:String,
    height:String
  }
});

const Product=mongoose.model('product',productSchema)

export default Product