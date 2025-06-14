
import { model, Schema } from "mongoose";
// // import { type } from "os";
import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },

    age: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,

}); 

const userModel = model("User", userScheme);

export default userModel;