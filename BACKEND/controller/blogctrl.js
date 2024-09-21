import Blog from "../Models/blogmodel.js";
import asynchandler from "express-async-handler";
import User from "../Models/usermodel.js";
import { validatemongodbid } from "../utils/validatemongodbid.js";



const createblog = asynchandler(async (req, res) => {
    try {
        const newblog = await Blog.create(req.body);
        res.json(newblog);
    } catch (error) {
        throw new Error(error);

    }
});

const updateblog = asynchandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedblog = await Blog.findByIdAndUpdate(id , req.body, {
            new: true,
        });
        res.json(updatedblog)

    } catch (error) {
        throw new Error(error)
    }
}
);

const getblog = asynchandler(async(req, res) => {
    const {id} = req.params;
    //validatemongodbid(id);
    validatemongodbid(id);
    try {
        const getablog = await Blog.findById(id);
        res.json(getablog);
    } catch (error) {
        throw new Error(error);
        
    }
})
const getallblogs = asynchandler(async(req, res) => {
    
    try {
        const getblog = await Blog.find();
        res.json(getblog);
    } catch (error) {
        throw new Error(error);
        
    }
});

const deleteblog = asynchandler(async (req, res) => {
    const {id} = req.params;
    try {
        const deleteablog = await Blog.findByIdAndDelete(id);
        res.json(deleteablog)
    } catch (error) {
        throw new Error(error);
    }

});
const likeblog = asynchandler(async (req, res) =>{

    const {blogId} = req.body;
    validatemongodbid(blogId);
    // find the blog which i want to be liked
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;
    //find if the user has liked the post
    const isLiked = blog?.isLiked;
    //find of the user has dislaked the blog


    const alreadydisliked = blog?.dislikes?.find(
        (userId) => userId.toString() === loginUserId?.toString())
    ;

    if (alreadydisliked ){
        const blog = await Blog.findByIdAndUpdate(
            blogId, {
            $pull: {dislikes: loginUserId},
            isdisliked: false,
        },
        { new: true }
    );
    
    res.json(blog);
};

if (isLiked)  {
    const blog = await Blog.findByIdAndUpdate(
        blogId, {
        $pull: {likes: loginUserId},
        isliked: false, // is liked= true donc twly isliked = false ( ymchou au contraire)
    },
    { new: true }
);

res.json(blog);
}
else {
    const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
            $push : {likes : loginUserId},
            isLiked: true, //isliked here = false donc lzm twly true donc isliked = true
        }
    )
}
});


        

        
    
export { createblog , updateblog , getblog, getallblogs, deleteblog , likeblog};

