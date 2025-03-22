const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] },
    role: { type: String, default: "user" }
});

const UsersModel = mongoose.model("myusers", UsersSchema);
module.exports = UsersModel;
