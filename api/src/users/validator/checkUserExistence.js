const User = require('../../models'); // Replace with the correct path to your User model

const checkUserExistence = async (req, res, next) => {
  try {
    const {email } = req.body; // Assuming you are checking by ID and email from request parameters

    // Check if user with the given ID or email exists
    const user = await User.findOne(email );

    if (!user) {
      // If user does not exist, return a 404 Not Found response
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach the user object to the request for later use in the route handlers
    // req.foundUser = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    // Handle other errors if needed
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = checkUserExistence;
