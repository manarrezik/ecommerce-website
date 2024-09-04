import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import { Router } from 'express';

import  authRouter  from './routes/authroute.js';
import bodyParser from 'body-parser';

dotenv.config();
let router = Router();
const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use("/api/user" , authRouter);

app.use(notfound);
app.use(errorHandler)
mongoose.connect(process.env.mongo_url)
    .then(() => {
        app.use(express.json());
        // app.use(express.urlencoded({extended: true}));

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => { console.log(err, "Received an Error"); });
