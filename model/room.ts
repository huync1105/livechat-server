import mongoose from "mongoose";

const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  name: { type: String, required: true },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId
    },
  ],
  messages: [
    {
      senders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: { type: String },
      timeStamp: { type: Date, default: Date.now() }
    }
  ]
});
module.exports = mongoose.model('Room', RoomSchema);