const {BlogModel} = require("../model/blog.model")
async function createBlog (req,res,next) {
    const {title, text} = req.body;
    const result = await BlogModel.create({
        text,
        title
    })

    res.send(result)
}

module.exports ={
    createBlog
}