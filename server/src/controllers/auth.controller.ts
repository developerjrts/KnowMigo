import type { Request, Response } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createSessionCode from "../configs/sessioncode.js";
import createVerificationToken from "../configs/verification.code.js";
import sendVerificationEmail from "../utils/verification.mail.js";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await userModel
      .findOne({
        username,
      })
      .select("+password");

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "Invalid credentials.",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({
        status: false,
        message: "Invalid credentials.",
      });
    }

    const session_code = createSessionCode(user._id.toString());

    res.cookie("session_code", session_code, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(201).json({
      message: "Signed In",
      status: true,
      session_code,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      status: false,
      message: "Something went wrong.",
    });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body;

    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(409).json({
        status: false,
        message: "User with this details already exists.",
      });
    }

    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];
    const avatar = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&size=128`;

    const newUser = await userModel.create({
      name,
      username,
      email,
      avatar,
      password: await bcrypt.hash(password, 12),
    });

    const verificationToken = createVerificationToken(newUser._id.toString());

    await newUser.updateOne({
      $set: {
        verificationToken,
        tokenExpires: new Date(Date.now() + 5 * 60 * 60 * 1000),
      },
    });

    const verification_link = `${process.env.CLIENT_URL}/verify?verification_session${verificationToken}`;

    await sendVerificationEmail(email, firstName, verification_link);

    res.status(201).json({
      status: true,
      message: "Verification session sent to your email.",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      status: false,
      message: "Something went wrong.",
    });
  }
};
