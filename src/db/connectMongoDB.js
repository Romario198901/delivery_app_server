import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL);
    console.log('Connection to MongoDB established successfully');
  } catch (error) {
    const isProd = process.env.NODE_ENV === 'production';
    console.error(isProd ? 'Something went wrong' : error.message);
    process.exit(1);
  }
};
