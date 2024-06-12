import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from '../backend/routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectToMongoDb from './db/connectToMongoDb.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4080; // Port value

app.use(express.json()); // to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

connectToMongoDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message); // Corrected typo here
  });
