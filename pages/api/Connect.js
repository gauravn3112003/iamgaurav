import initDB from "../../helper/initDB";
import ConnectUs from "../../Modal/ConnectUs";
initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchConnect(req, res);
      break;
    case "POST":
      await addConnect(req, res);
      break;
  }
};

// To Add Connect Us
const addConnect = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      return res.status(422).json({ error: "Please add all the fields" });
    }
    const connect = await new ConnectUs({
      name,
      email,
      message,
    }).save();
    res.status(201).json(connect);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
    console.log(err);
  }
};

// Fetch All Connect Us
const fetchConnect = async (req, res) => {
  try {
    const connect = await ConnectUs.find();
    res.status(200).json(connect);
  } catch (err) {
    console.log(err);
  }
};
