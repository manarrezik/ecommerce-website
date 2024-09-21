import mongoose from "mongoose";
const validatemongodbid = (id) => {
    const isvalid = mongoose.Types.ObjectId.isValid(id);
    if (!isvalid)  throw new Error ("this is id not valid or not found")
};

export {validatemongodbid}