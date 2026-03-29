import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
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
    image: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Burgers', 'Drinks', 'Desserts', 'Pizza', 'Salads', 'Snacks'],
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
productSchema.index({ shopId: 1, category: 1, price: 1 });
productSchema.index({ shopId: 1, category: 1, name: 1 });
export const Product = model('Product', productSchema);
