import { Router } from "express";

let router = Router();





        //image storage engine
        const storage = multer.diskStorage({
            destination: './upload/images',
            filename: (req, file, cb) => {
                return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
            }
        });
        


        const upload = multer({ storage: storage });

        router.use('/images', express.static('upload/images'));

        router.post('/upload', upload.single('product'), (req, res) => {
            res.json({
                 success: 1,
                 image_url: `http://localhost:${port}/images/${req.file.filename}` //will display this as response
            });

            
        })
        //create api to add a product
        
        router.post('/addproduct', async (req, res) => {
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
        router.post('/api/product/:id', async (req, res) => {
            try {
                await productschema.findOneAndDelete({ id: req.body});
                console.log("product removed");
                res.json({
                    success: true,
                    name: req.body.name
                })
                if(!product){
                    return res.status(404).json({message: "product not found"});
                }
                res.status(200).json({essage: "product removed successfully"})

            }

            catch (error) {
                res.status(500).json({ Message: error.Message })
            }



        })



        //create API to get all products
        router.get('/getallproduct', async (req, res) => {
            let products = await product.find({});
            console.log("all products fetched");
            res.send(products);
            try {
                res.send
            } catch (error) {

            }
        })

        //create api to update a product
        router.put('/update/product/:id' , async ( req, res) => {
          try {
            const {id} = req.params;

            let product = await product.findByIdAndUpdate(id , req.body) // the req.body is what we gonna update

            // in case the product doesnt exist
            if(!product){
                return res.status(404).json({message: "product not found"});
            }
            const updatedproduct = await product.findById(id);
            res.status(200).json(updatedproduct)

            
          } catch (error) {
            res.status(500).json({message: error.messsage})
            
          }
        })

        

