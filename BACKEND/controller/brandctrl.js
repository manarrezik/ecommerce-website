import brand from "../Models/brandmodel.js";
import asynchandler from "express-async-handler";
import { validatemongodbid } from "../utils/validatemongodbid.js";

const createbrand = asynchandler(async(req, res ) => {
    try {
        const createdbrand = await brand.create(req.body);
        res.json(createdbrand)
    } catch (error) {
         
        throw new Error(error)
    }
});
const updatebrand = asynchandler(async(req, res ) => {
    const {id} = req.params;
    validatemongodbid(id);
    try {
        const updatedbrand = await brand.findByIdAndUpdate(id, req.body ,{
            new: true,
        });
        res.json(updatedbrand);
    } catch (error) {
        
        throw new Error(error);
    }
});
const deletebrand = asynchandler(async(req, res ) => {
    const {id} = req.params;
    try {
        const deletedbrand = await brand.findByIdAndDelete(id)
        res.json(deletedbrand);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getbrand= asynchandler(async(req, res ) => {
    const {id} = req.params;

    try {
        const getabrand = await brand.findById(id)
        res.json(getabrand);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getallbrands = asynchandler(async(req, res ) => {
    
    try {
        const getallbrands = await brand.find();
        res.json(getallbrands);
    } catch (error) {
        
        throw new Error(error);
    }
});
export {createbrand , updatebrand ,deletebrand as deletecategory , getbrand as getcategory, getallbrands as getallcategories};
