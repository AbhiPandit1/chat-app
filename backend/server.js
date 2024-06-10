import express from 'express';
import dotenv from 'dotenv';

import authRoutes from '../backend/routes/authRoutes.js';
import connectToMongoDb from './db/connectToMongoDb.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4080; // Port value

app.use(express.json()); // to parse incoming requests with JSON payloads (from req.body)

app.use('/api/auth', authRoutes);

connectToMongoDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message); // Corrected typo here
  });
