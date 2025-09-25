import mongoose from "mongoose";



const Productschma = new mongoose.Schema({

    productName:{
        type: String,
        required :true
    },

    quantity:{
        type :Number,
        required :true
    },

    status:{
        type :String,
        required :true
    }
})

const Product=mongoose.model("localproduct",Productschma)

export default Product