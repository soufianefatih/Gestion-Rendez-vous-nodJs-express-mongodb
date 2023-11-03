const signToken = require("./signToken");
const { hashPassword, hashedPassword } = require("./hashPassword");
const comparePassword = require("./comparePassword"); 

module.exports = {
  signToken,
  hashPassword,
  hashedPassword,
  comparePassword,
};
