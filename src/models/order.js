import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
type: [orderItemSchema],
required: true,
validate: {
validator:(value) => value.length > 0,
message: 'Order must contain at least one item',
},
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const Order = model('Order', orderSchema);
