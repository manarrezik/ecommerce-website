import express from 'express';
import  createuser  from '../controller/userctrl.js';

const router = express.Router();
router.post("/register" , createuser);

export default router;
export const authRouter = router;