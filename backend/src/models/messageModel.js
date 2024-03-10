const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RegisterData",
    },
    content: {
      type: String,
      trim: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RegisterData",
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timeStamp: true,
  }
);

const Message = mongoose.model("Message", messageModel);
module.exports = Message;