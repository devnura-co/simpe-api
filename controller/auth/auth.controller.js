const helper = require("../../helper/helper");

let result = {};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const key = "001";
    if (!email || !password) {
      const error = new Error("Username and password is required");
      error.statusCode = 400;
      throw error;
    }

    return res.status(200).json({
      email: email,
      password: password,
      key: key,
    });
  } catch (error) {
    // create log
    result = helper.createResponse(
      error.statusCode,
      "Internal Server Error",
      error.message,
      []
    );

    return res.status(error.statusCode).json(result);
  }
};

module.exports = {
  loginUser,
};
