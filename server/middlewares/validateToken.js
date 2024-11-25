import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ error: "Token Invalido, autorizacion denegada" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res
        .status(401)
        .json({ error: "Token Invalido, autorizacion denegada" });
    req.user = user;
    next();
  });
};
