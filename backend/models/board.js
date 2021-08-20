const moongose = require("mongoose");


const boardSchema = new moongose.Schema({
  userId: { type: moongose.Schema.ObjectId, ref: "user" },
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

const board = moongose.model("board", boardSchema);
module.exports = board;
