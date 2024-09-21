import {Router} from "express"
import { createblog} from "../controller/blogctrl.js";
import {updateblog} from "../controller/blogctrl.js";
import {getblog} from "../controller/blogctrl.js";
import {getallblogs} from "../controller/blogctrl.js";
import {deleteblog} from "../controller/blogctrl.js";
import {likeblog} from "../controller/blogctrl.js";







let router = Router();

router.post("/", createblog);
router.put("/:id", updateblog);
router.get("/:id", getblog);
router.get("/", getallblogs);
router.get("/", getallblogs);
router.delete("/:id", deleteblog);
router.put("/likes", likeblog);











export default router;