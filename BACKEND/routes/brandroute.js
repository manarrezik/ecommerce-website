import {Router} from "express"
import {createbrand} from "../controller/brandctrl.js"
import {updatebrand} from "../controller/brandctrl.js"
import {deletecategory as deletebrand} from "../controller/brandctrl.js"
import {getcategory as getbrand} from "../controller/brandctrl.js"
import {getallcategories as getallbrands} from "../controller/brandctrl.js"

let router = Router();



router.post ("/" , createbrand);
router.put ("/:id" , updatebrand);
router.delete ("/:id" , deletebrand);
router.get ("/:id" , getbrand);
router.get ("/:id" , getallbrands);



export default router;