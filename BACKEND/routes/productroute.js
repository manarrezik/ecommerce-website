import { Router } from "express";
import {addtowishlist, createproduct} from "../controller/productctrl.js";
import {getallproduct} from "../controller/productctrl.js";
import {getproduct} from "../controller/productctrl.js";
import { updateproduct } from "../controller/productctrl.js";
import { deleteproduct } from "../controller/productctrl.js";



 let router = Router();

 router.post("/", createproduct);
 router.get("/:id", getproduct);
 router.get("/", getallproduct);
 router.put("/:id", updateproduct);
 router.delete("/:id", deleteproduct);
 router.put("/wishlist", addtowishlist);

export default router;



