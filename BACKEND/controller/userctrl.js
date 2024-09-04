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
    //   res.json({
    //     message: "User already exists",
    //     success: false,
    //   });
    throw new Error ('user already exists')

    }
  });
const loginuserctrl = asynchandler(async (req, res) => {
    const {email, password} = req.body;
    //check if the user exists or not
    const findUser = await User.findOne({email});
    if(findUser && await findUser.ispasswordmatched(password)){
        res.json(findUser)


    }

        else{
            // res.json({
            //     message: "password not matched",
            //     success: false,
            // })
            throw new Error("unvalid user")

        }
    
});

export default { createuser, loginuserctrl };

