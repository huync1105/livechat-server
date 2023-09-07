import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  first_name: {type: String},
  last_name: {type: String}
});
module.exports = mongoose.model('User', UserSchema);