const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
app.use(express.static("public"))

app.use((req,res,next)=>{
    fs.appendFileSync("king.txt",`${Date.now()} is a ${req.method}`)
    next()    
})

app.use((req,res,next)=>{
    console.log("File 2");
    next()
    
})

app.get('/', (req, res) => {
  res.send('Hello World 2')
})

app.get('/about',(req,res)=>{
    res.send("This is about Page")
})

app.get('/contact',(req,res)=>{
    res.send("This is about Contact")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
