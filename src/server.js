import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import { pino } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import shopRoutes from './routes/shopRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
// const PORT = 3000;
const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(pino);
app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
  }),
);
app.use(cors());
app.use(helmet());
app.use(shopRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(notFoundHandler);

app.use(errorHandler);
await connectMongoDB();
app.listen(PORT, () => { console.log(`Server is running on ${PORT}`)});
