const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
})
const User = mongoose.model("User", UserSchema);
const Usermodel = {
    username: username,
    password: password,
    email: email
}
module.exports = {
    Usermodel
}