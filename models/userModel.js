import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    minlength: [13, "Email must be at least 13 characters long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "Password must be at least 5 characters long"],
  },
});

const User = mongoose.model("user", userSchema);

export default User;
