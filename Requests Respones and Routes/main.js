const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
}).post("/", (req, res) => {
    console.log("This the request sent by post");
    res.send("This is the post Req")
}).post("/", (req, res) => {
    console.log("This the request sent by post");
    res.send("This is another  the post Req")
})

app.get('/index', (req, res) => {
    res.sendFile('Templates/index.html',{root:__dirname})
})

app.get('/api', (req, res) => {
    res.json({a:1,b:2,c:3,d:4})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
