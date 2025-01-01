import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isReaded: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: new Date(Date.now()).toLocaleDateString("es-AR"),
  },
});

export default mongoose.model("Message", msgSchema);
