import category from "../Models/blogcategorymodel.js";
import asynchandler from "express-async-handler";
import { validatemongodbid } from "../utils/validatemongodbid.js";

const createcategory = asynchandler(async(req, res ) => {
    try {
        const createdcategory = await category.create(req.body);
        res.json(createdcategory)
    } catch (error) {
         
        throw new Error(error)
    }
});
const updatecategory = asynchandler(async(req, res ) => {
    const {id} = req.params;
    validatemongodbid(id);
    try {
        const updatedcategory = await category.findByIdAndUpdate(id, req.body ,{
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
        const deletedcategory = await category.findByIdAndDelete(id)
        res.json(deletedcategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getcategory= asynchandler(async(req, res ) => {
    const {id} = req.params;

    try {
        const getacategory = await category.findById(id)
        res.json(getacategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
const getallcategories = asynchandler(async(req, res ) => {
    
    try {
        const getallcategory = await category.find();
        res.json(getallcategory);
    } catch (error) {
        
        throw new Error(error);
    }
});
export {createcategory, updatecategory ,deletecategory , getcategory, getallcategories};
