import Category from "../Models/productcategorymodel.js";
import asynchandler from "express-async-handler";
import { validatemongodbid } from "../utils/validatemongodbid.js";

const createcategory = asynchandler(async(req, res ) => {
    try {
        const createdcategory = await Category.create(req.body);
        res.json(createdcategory)
    } catch (error) {
         
        throw new Error(error)
    }
});
const updatecategory = asynchandler(async(req, res ) => {
    const {id} = req.params;
    validatemongodbid(id);
    try {
        const updatedcategory = await Category.findByIdAndUpdate(id, req.body ,{
            new: true,
        });
        res.json(updatedcategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
const deletecategory = asynchandler(async(req, res ) => {
    const {id} = req.params;
    try {
        const deletedcategory = await Category.findByIdAndDelete(id)
        res.json(deletedcategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getcategory= asynchandler(async(req, res ) => {
    const {id} = req.params;

    try {
        const getacategory = await Category.findById(id)
        res.json(getacategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getallcategories = asynchandler(async(req, res ) => {
    
    try {
        const getallcategory = await Category.find();
        res.json(getallcategory);
    } catch (error) {
        
        throw new Error(error);
    }
});





export {createcategory, updatecategory ,deletecategory , getcategory, getallcategories};
