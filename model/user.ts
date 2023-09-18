import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  user_name: {type: String},
  pass_word: {type: String},
  is_online: {type: Boolean},
  // last_time_online: {type: Date},
  // currentRoomId: [{type: mongoose.Schema.Types.ObjectId}]
});
module.exports = mongoose.model('User', UserSchema);