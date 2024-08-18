import { Router } from "express";
import product from "./product.js";


export default ({ config, db }) => {
    let api = Router();

    api.use('/product', product({ config, db }))

   


    return api
}