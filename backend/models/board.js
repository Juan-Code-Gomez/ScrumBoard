const moongose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const boardSchema = new moongose.Schema({
  userId: { type: moongose.Schema.ObjectId, ref: "user" },
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id.Date,
      name: this.name,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const board = moongose.model("board", boardSchema);

module.exports = board;
