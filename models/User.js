import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    userName: {type: String, required: true},
    profilepic: {type: String},
    coverpic: {type: String},
    razorpayid: {type: String},
    razorpaysecret: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export default mongoose.models.User || model("User", UserSchema) ; //If a User model already exists, use it. Otherwise, use the User model we just created. For a refernce see chatgpt video 96 practice chat.

