import express from 'express';
import classRouter from './routes/classRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// to use .env file variables in the app
dotenv.config();

// setup for express
const app = express();
app.use(express.json());
app.use(cors());

// handling routes
app.use('/class', classRouter);

// setup port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// setup mongoose
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('db is connected');
    }
  })
  