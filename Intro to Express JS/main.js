const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Welcome To this World King')
})


app.get('/about', (req, res) => {
  res.send('This is the about page')
})

app.get('/contact', (req, res) => {
  res.send('This is the conatct Page')
})


app.get('/project/:slug', (req, res) => {
    console.log(req.query);    
  res.send(`Welcome To this World King ${req.params.slug}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
