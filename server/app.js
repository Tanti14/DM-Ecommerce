import express from "express";
/* import fileUpload from "express-fileupload"; */
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

/* app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
); */

app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);
