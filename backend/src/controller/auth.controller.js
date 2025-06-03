// import { PrismaClient } from "../../generated/prisma";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//! Register
export const RegisterController = async (req, res) => {
  try {
    const { name, email, gender, password } = req.body;

    if (!name || !email || !gender || !password) {
      return res.status(400).json({
        status: "error",
        message: "Semua field harus diisi",
      });
    }

    const passwordHassed = await bcrypt.hash(password, 10);

    const jwtToken = jwt.sign(
      {
        email: email,
      },
      process.env.SECRET_KEY
    );

    const response = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: passwordHassed,
        created_at: new Date(),
      },
    });

    return res.status(201).json({
      status: "success",
      message: "berhasil login",
      data: response,
      token: jwtToken,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Gagal login",
      data: error,
    });
  }
};

//! Login
export const LoginController = async (req, res) => {};
