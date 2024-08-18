import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import { Router } from 'express';

import  authRouter  from './routes/authroute.js';

dotenv.config();
let router = Router();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}));


app.use("/api/user" , authRouter);
mongoose.connect(process.env.mongo_url)
    .then(() => {
        app.use(express.json());
        // app.use(express.urlencoded({extended: true}));

        app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
    })
    .catch((err) => { console.log(err, "Received an Error"); });
