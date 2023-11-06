const User = require('../../models'); // Replace with the correct path to your User model


const checkUserExistence = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    // If the user doesn't exist, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error checking existing user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = checkUserExistence;
