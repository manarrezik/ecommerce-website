import User from '../Models/usermodel.js';

const createuser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email }); // Find user by email

  if (!findUser) {
    try {
      const newUser = await User.create(req.body); // Create a new user
      res.json(newUser);
    } catch (err) {
      // Handle errors during creation (e.g., validation errors)
      res.status(500).json({ message: "Error creating user", error: err.message });
    }
  } else {
    res.json({
      message: "User already exists",
      success: false,
    });
  }
};

export default createuser;  // Export the function as default