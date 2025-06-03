import express from "express";
import {
  RegisterController,
  LoginController,
} from "../controller/auth.controller.js"; // tambahkan .js jika pakai ESM

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);
// router.post("/login", login);

export default router;
