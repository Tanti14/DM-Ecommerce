import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcrypt";
import User from "../models/users.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ error: "Mail is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = await createAccessToken({ id: savedUser._id });

    res.cookie("token", token); //Seteamos una cookie de nombre token con el valor generado por JWT

    res.json({
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password: hashedPassword },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
