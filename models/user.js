import mongoose from "mongoose";
const {Schema}  = mongoose;
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    mobile: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    address: {type: String, required: true},
}, {timestamps: true});

export default mongoose.model("User", userSchema);