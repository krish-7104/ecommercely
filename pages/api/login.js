import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password ===
          CryptoJS.AES.decrypt(user.password, "hiecommercely").toString(
            CryptoJS.enc.Utf8
          )
      ) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          "hiecommercely",
          { expiresIn: "2d" }
        );
        res.status(200).json({
          success: true,
          token,
        });
      } else {
        res.status(400).json({
          success: false,
          error: "Invalid Credentails!",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        error: "No User Found!",
      });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDb(handler);
