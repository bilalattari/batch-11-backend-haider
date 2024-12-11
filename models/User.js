

import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
    fullname: String,
    email: String
});

const User = mongoose.model('User', userSchema);
export default User
