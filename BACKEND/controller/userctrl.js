import User from '../Models/usermodel.js';
import asynchandler from  'express-async-handler';


const createuser = asynchandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email:email }); // Find user by email
  
    if (!findUser) {
      try {
        const newUser = await User.create(req.body); // Create a new user
        res.json(newUser);
      } catch (err) {
        // Handle errors during creation (e.g., validation errors)
        res.status(500).json({ message: "Error creating user", error: err.message });
      }
    } else {
      res.json({
        message: "User already exists",
        success: false,
      });
    throw new Error ('user already exists')

    }
  });
// const loginuserctrl = async (req, res) => {
//     const {email, password} = req.body;
//     //check if the user exists or not
//     const findUser = await User.findOne({email});
//     if(findUser && await findUser.ispasswordmatched(password)){
//         res.json(findUser)


//     }

//         else{
//             res.json({
//                 message: "password not matched",
//                 success: false,
//             })
//             // throw new Error("unvalid user")

//         }
    
// };

//Step 1: Login User Function
const loginuserctrl = asynchandler(async (req, res) => {
    const { email, password } = req.body;

    // Step 2: Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required.", success: false });
    }

    // Step 3: Find User
    const findUser = await User.findOne({ email });
    if (!findUser) {
        return res.status(401).json({
            message: "Invalid email or password",
            success: false,
        });
    }

    // Step 4: Check Password
    const isMatch = await findUser.ispasswordmatched(password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid email or password",
            success: false,
        });
    }

    // Step 5: Successful login
    res.status(200).json(findUser);
});


//update a user
const updateuser = asynchandler(async(req, res) =>{
    console.log(req.params);
    const{id} = req.params;
    try {
        const updateauser = await User.findByIdAndUpdate(id, {
            name: req?.body.name,
            email: req?.body.email,
            password: req?.body.password,
            mobile: req?.body.mobile,
        },
        {
            new: true,
        }
    );
        res.json({
            updateauser,
        });
    } catch (error) {
        throw new Error (error);
    }
    });


//get all users

const getallusers = asynchandler(async(req, res) =>{
try {
    const getusers = await User.find();
} catch (error) {
    throw new Error (error);
}
});

//get one user
const getoneuser = asynchandler(async(req, res) =>{
    console.log(req.params);
    const{id} = req.params;
    try {
        const getuser = await User.findById(id);
        res.json({
            getuser,
        });
    } catch (error) {
        throw new Error (error);
    }
    });


    //delete a user
const deleteuser = asynchandler(async(req, res) =>{
    console.log(req.params);
    const{id} = req.params;
    try {
        const deleteuser = await User.findByIdAndDelete(id);
        res.json({
            deleteuser,
        });
    } catch (error) {
        throw new Error (error);
    }
    });

    export { createuser, loginuserctrl, deleteuser, getallusers, updateuser, getoneuser };
