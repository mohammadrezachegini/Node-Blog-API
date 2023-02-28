const express = require("express")
const{
    ErrorHandler,
    NotFoundError
} = require("./util/errorHandler")
const app = express()
const BlogController = require("./controller/blog.controller")
require("./config/mongo.config")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/", (req,res,next) => {

})

app.post("/create", BlogController.create)
app.post("/new", BlogController.newBlog)
app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
    console.log("Server is running")
})