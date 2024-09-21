import {Router} from "express"
import {createcategory} from "../controller/prodcategoryctrl.js"
import {updatecategory} from "../controller/prodcategoryctrl.js"
import {deletecategory} from "../controller/prodcategoryctrl.js"
import {getcategory} from "../controller/prodcategoryctrl.js"
import {getallcategories} from "../controller/prodcategoryctrl.js"

let router = Router();



router.post ("/" , createcategory);
router.put ("/:id" , updatecategory);
router.delete ("/:id" , deletecategory);
router.get ("/:id" , getcategory);
router.get ("/:id" , getallcategories);



export default router;