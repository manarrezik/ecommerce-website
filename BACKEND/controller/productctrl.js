import Product from '../Models/productmodel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify'
import User from '../Models/usermodel.js';




        // //image storage engine
        // const storage = multer.diskStorage({
        //     destination: './upload/images',
        //     filename: (req, file, cb) => {
        //         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        //     }
        // });
        


        // const upload = multer({ storage: storage });

        // router.use('/images', express.static('upload/images'));

        // router.post('/upload', upload.single('product'), (req, res) => {
        //     res.json({
        //          success: 1,
        //          image_url: `http://localhost:${port}/images/${req.file.filename}` //will display this as response
        //     });

            
        // })
        //create api to add a product
        
        const createproduct = asyncHandler(async (req, res) => {
            try {
                // const newProduct = new Product({
                //     id: req.body.id,
                //     name: req.body.name,
                //     category: req.body.category,
                //     price: req.body.price,
                //     tags: req.body.tags,
                //     stock: req.body.stock
                // });

                // console.log(newProduct);

                // await newProduct.save();
                // console.log("Product saved");

                // res.json({
                //     success: true,
                //     name: req.body.name
                // });
                const newproduct = await Product.create(req.body);
                res.json(newproduct);
            } catch (error) {
                throw new Error(error);
            }
        });
        //create API to remove product
        const deleteproduct = asyncHandler( async (req, res) => {
            const {id} = req.params
            try {

                const deletedproduct = await Product.findByIdAndDelete(id);
            
                if(!product){
                    return res.status(404).json({message: "product not found"});
                }
                res.status(200).json({essage: "product removed successfully"})

            }

            catch (error) {
                throw new Error(error);
            }



        });



        //create API to get all products
        const getallproduct = asyncHandler( async (req, res) => {
           
            try {
                const findallproduct = await Product.find();

                res.json(findallproduct)
            } catch (error) {
                throw new Error(error);

            }
        });

        //create an api to get a product

        const getproduct = asyncHandler(async ( req, res) => {
            const {id} = req.params;
            try {
                const findproduct = await Product.findById(id);
                res.json(findproduct);
                
            } catch (error) {
                throw new Error(error);
            }
        });

        //create api to update a product
        const updateproduct = asyncHandler(  async ( req, res) => {
            const {id} = req.params;
          try {
            

            const updatedproduct = await Product.findByIdAndUpdate({id} , req.body, {
                new : true,
            }); // the req.body is what we gonna update

            // in case the product doesnt exist
            if(!product){
                return res.status(404).json({message: "product not found"});
            }
           
            res.status(200).json(updatedproduct)

            
          } catch (error) {
           throw new Error(error)
            
          }
        });
        const addtowishlist = asyncHandler(async(req,res)=>{
            const {_id} = req.user;
            const{prodId} = req.body;
            try {
                const user = await User.findById(_id);
                const alreadyadded = user.wishlist.find((id)=>id.toString()=== prodId);
                if(alreadyadded){
                    let user = await User.findByIdAndUpdate(
                        _id,
                        {
                        $pull: {wishlist: prodId},
                        },
                        {
                            new: true,
                        }
                    );
                    res.json(user);
                }
                else{
                    let user = await User.findByIdAndUpdate(
                        _id,
                        {
                        $push: {wishlist: prodId},
                        },
                        {
                            new: true,
                        }
                    );
                    res.json(user);
                    

                }
                
            } catch (error) {
                throw new Error(error)
            }
        })
 export { createproduct, getallproduct, getproduct, updateproduct, deleteproduct, addtowishlist};

          

        

