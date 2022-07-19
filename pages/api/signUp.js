import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcryptjs";
initDB();

export default async (req, res) => {
  const { name, userName, email, password } = req.body;
  try {
    if (!name || !userName || !email || !password) {
      return res.status(422).json({ error: "please fill all the fields" });
    }
    const emailR = await User.findOne({ email });
    const userNameR = await User.findOne({ userName });
    if (userNameR) {
      return res
        .status(422)
        .json({ error: "user already exists with that email" });
    }
    if (emailR) {
      return res
        .status(422)
        .json({ error: "user already exists with that email" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      name,
      userName,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).json({ message: "signup success" });
    
  } catch (err) {
    console.log(err);
  }
};
