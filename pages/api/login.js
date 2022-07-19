import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

initDB();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ error: "please ass all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "user dont exists with that email" });
    }
    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { name, userName, role, email } = user;
      res.status(201).json({
        token,
        User: { name, userName, role, email },
        name,
        userName,
        role,
        email
      });
    } else {
      return res.status(401).json({ error: "Invalid Credentials !" });
    }
  } catch (err) {
    console.log(err);
  }
};
