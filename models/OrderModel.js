const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      // required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    pinCode: {
      type: String,
      // required: false,
    },
    phoneNo: {
      type: Number,
      required: false,
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  paymentInfo: {
    id: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },
  paidAt: {
    type: Date,
    required: false,
  },
  itemsPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: false,
    default: "In process",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
