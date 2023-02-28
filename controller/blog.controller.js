const {BlogModel} = require("../model/blog.model")
async function create (req,res,next) {
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


async function newBlog (req,res,next) {
    try {
        const {title, text} = req.body;
        const newObject = new BlogModel({
            text,
            title
        })
        await newObject.save()
        res.send(newObject)
    }
    catch (err){
        console.log(err)
        next(err)
    }
}

async function newBlogMany (req,res,next) {
    try {
        const newObjects = await BlogModel.insertMany([
            {
                title: "smthsmth1",
                text: "smthsmth1"
            },
            {
                title: "smthsmth2",
                text:  "smthsmth2"
            },
            {
                title: "smthsmth3",
                text: "smthsmth3"
            }
        ])
        res.send(newObjects)
    }
    catch (err){
        console.log(err)
        next(err)
    }
}

module.exports ={
    create,
    newBlog,
    newBlogMany
}