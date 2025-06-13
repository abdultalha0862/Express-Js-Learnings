const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs");
app.set("views", "./views"); 

app.get('/', (req, res) => {
    let SName = "BMW"
    let searchText = "Search Whatever you want"
    res.render("index", {SName:SName, searchText:searchText})
})

app.get('/blog/:slug',(req,res)=>{
    let blogTitle = req.params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    let blogContent = "Its a very good brand with excellent quality and performance."
    res.render("blogpost", {blogTitle:blogTitle, blogContent:blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
