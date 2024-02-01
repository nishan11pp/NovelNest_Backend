const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    cartItems: [
      {
        productName: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        producQuantity: {
          type: Number,
          default: 1,
        },
        image: {
          type: String,
          required: false,
        },
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
