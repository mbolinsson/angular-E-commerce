const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ordernumber: {type: Number},
  userId: {type: String},
  isActive: {type: Boolean},
  products: {type: Array},
});

// const orderSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   ordernumber: {type: Number},
//   userId: {type: String},
//   products: {type: Array},
//   orderActive: {type: Boolean},
// });

module.exports = mongoose.model("Order", orderSchema);
