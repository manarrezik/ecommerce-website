 import express from 'express';
import {createuser} from '../controller/userctrl.js';
import {loginuserctrl} from '../controller/userctrl.js';
import {getallusers} from '../controller/userctrl.js';
import {getoneuser} from '../controller/userctrl.js';
import {deleteuser} from '../controller/userctrl.js';
import {updateuser} from '../controller/userctrl.js';

// const app = express();
 const router = express.Router(); // Initialize the router object

// Define the routes using router.post after initialization
router.post('/register', createuser);
router.post("/login", loginuserctrl);
router.get ('/allusers', getallusers);
router.get ('/:id', getoneuser);
router.delete ('/:id', deleteuser);
router.put('/:id', updateuser);



export default router; // Export the router as default

