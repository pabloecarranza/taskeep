import { User } from "./../models/User.js";
import Jwt from "jsonwebtoken";
import config from "../config.js";
import { serialize } from "cookie";

export const signUp = async (req, res) => {
  const { username, password, email } = req.body;

  const NewUser = await User.create({
    username,
    email,
    password: await User.prototype.encryptPassword(password),
  });

  const token = Jwt.sign({ id: NewUser.id }, config.SECRET, {
    expiresIn: 84600,
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!userFound) return res.json({ message: "user not found" });
  const matchPassword = await User.prototype.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "invalid password" });

  const token = Jwt.sign({ id: userFound.id }, config.SECRET, {
    expiresIn: 86400,
  });

  const serialized = serialize("mytokenNames", token, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);

  res.json("Login Success");
};

export const profileHandler = async (req, res) => {
  const { mytokenName } = req.cookies;
  try {
    const user = verify(mytokenName, config.SECRET);
    return res.json({ username: user.username, email: user.email });
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};
