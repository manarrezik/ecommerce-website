 import express from 'express';

const router = express.Router();
import createuser from '../controller/userctrl.js';
import loginuserctrl from '../controller/userctrl.js';

// const app = express();
// const router = express.Router(); // Initialize the router object

// Define the routes using router.post after initialization
router.post('/register', createuser);
router.post("/login", loginuserctrl);

export default router; // Export the router as default

