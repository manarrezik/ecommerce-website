import {Router} from "express"
import {createcategory} from "../controller/blogcategoryctrl.js"
import {updatecategory} from "../controller/blogcategoryctrl.js"
import {deletecategory} from "../controller/blogcategoryctrl.js"
import {getcategory} from "../controller/blogcategoryctrl.js"
import {getallcategories} from "../controller/blogcategoryctrl.js"

let router = Router();



router.post ("/" , createcategory);
router.put ("/:id" , updatecategory);
router.delete ("/:id" , deletecategory);
router.get ("/:id" , getcategory);
router.get ("/:id" , getallcategories);



export default router;