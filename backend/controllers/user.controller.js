import User from "../models/user.model.js";
export const test = (req, res) => {
  return res.json("hey bruh");
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username: username });

  if (!user) return res.status(404).json({ error: "User not found" });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();
  return res.status(200).json(detailsWithoutPassword);
};
