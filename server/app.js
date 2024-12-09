import express from "express";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ORIGIN_URL } from "./config.js";


export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);
app.use("/api", usersRoutes);

/* origin: http://localhost:5173 */
