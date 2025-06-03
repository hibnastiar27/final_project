import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"; // ← pakai .js

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRoutes); // ← pakai hasil import langsung

app.listen(port, () => {
  console.log(`api-destinara running on port : ${port}`);
});
