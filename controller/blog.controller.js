const {BlogModel} = require("../model/blog.model")
async function createBlog (req,res,next) {
    try {
        const {title, text} = req.body;
        const result = await BlogModel.create({
            text,
            title
        })

        res.send(result)
    }
    catch (err){
        console.log(err)
        next(err)
    }
}

module.exports ={
    createBlog
}