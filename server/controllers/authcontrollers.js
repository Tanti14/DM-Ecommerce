import { JWT_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
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

    res.cookie(
      "token",
      token
    ); /* Seteamos una cookie de nombre token con el valor generado por JWT */

    res.json({
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = await createAccessToken({ id: foundUser._id });

    res.cookie(
      "token",
      token
    ); /* Seteamos una cookie de nombre token con el valor generado por JWT */

    res.json({
      name: foundUser.name,
      email: foundUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out" });
};

/* Profile sujeto a revision - Posiblemente innecesario */
export const profile = async (req, res) => {
  const foundUser = await User.findById(req.user.id);

  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({
    name: foundUser.name,
    email: foundUser.email,
  });
};

export const verifyToken = (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ error: "No Autorizado" });

  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ error: "No Autorizado" });

    const foundUser = await User.findById(user.id);
    if (!foundUser) return res.status(404).json({ error: "User not found" });

    return res.json({
      name: foundUser.name,
      email: foundUser.email,
    });
  });
};
