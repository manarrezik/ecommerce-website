import express from 'express';
import { Router } from "express"

import CONFIG from './config.json' assert {type: 'json'};
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path'
import dotenv from 'dotenv'
//multer is used to handle files upload
dotenv.config()
let router = Router()




const PORT = CONFIG.port || 7000

const app = express();
app.use(cors({
    origin: CONFIG.corsOrigin,
    optionsSuccessStatus: 200
}));

//connect to Database///////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(CONFIG.mongo_url)
    .then((db) => {
        //Json parsing middleware
        app.use(express.json())

        // //custom middleware to log and see requests
        // app.use(requestLogger)

        //use cors


        // //api config
        // app.use('/api', api({ config: CONFIG, db }))

        // //template engine config
        // app.set('view engine', 'pug')
        // app.set('views', './views')


        // //swagger
        // app.use('/api-docs', swagger({ config: CONFIG, db }))

        // app.get("/", (res, req) => {
        //     res.send("express is RUNNING")
        // }
        // )

        //image storage engine
        const storage = multer.diskStorage({
            destination: './upload/images',
            filename: (req, file, cb) => {
                return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
            }
        });
        // app.post('/upload', (req, res) => {
        //     // Handle POST request here
        //     res.json({
        //                 success: 1,
        //                 // image_url: `http://localhost:${port}/images/${req.file.filename}` //will display this as response
        //             });
        // });
        
        
        const upload = multer({ storage: storage });
        
        app.use('/images', express.static('upload/images'));
        
        app.post('/upload', upload.single('product'), (req, res) => {
            res.json({
                // success: 1,
                // image_url: `http://localhost:${port}/images/${req.file.filename}` //will display this as response
            });

            // res.send("ist running youuuuuuuuu")
        })
        // app.post('/addproduct',async (req,res)=>{
        //     const product = new product({
        //         "id":"req.body.id",
        //         "name":"req.body.name",
        //         "category":"req.body.category",
        //         "price":"req.body.price",
        //         "tags":"req.body.tags",
        //         "stock":"req.body.stock"



        //     });
        //     console.log(product);
        //     await product.save();
        //     console.log("saved");

        //     res.json({
        //         success:true,
        //         name:req.body.name,

        //     })
        // })



        app.post('/addproduct', async (req, res) => {
            try {
                const newProduct = new Product({
                    id: req.body.id,
                    name: req.body.name,
                    category: req.body.category,
                    price: req.body.price,
                    tags: req.body.tags,
                    stock: req.body.stock
                });
        
                console.log(newProduct);
        
                await newProduct.save();
                console.log("Product saved");
        
                res.json({
                    success: true,
                    name: req.body.name
                });
            } catch (err) {
                console.error(err);
                res.status(500).json({ success: false, error: 'An error occurred while adding the product' });
            }
        });
        //create API to remove product
        app.post('/removeproduct' , async (req, res) => {
            await productschema.findOneAndDelete({id:req.body.id});
            console.log("product removed");
            res.json({
                success:true,
                name:req.body.name

            })


        })
        //create API to get all products
        app.get('/getallproduct' , async (req,res) => {
            let products = await  product.find({});
            console.log("all products fetched");
            res.send (products);
        })




        app.listen(
            PORT,
            () => console.log(`SERVER IS RUNNIN IN ${PORT}`)
        )
    })
    .catch((err) => { console.log(err, "Received an Error") })



