import { Schema, model } from 'mongoose';

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
      default: 4,
    },
  },
  { timestamps: true, versionKey: false },
);
shopSchema.index({ rating: 1 });
export const Shop = model('Shop', shopSchema);
