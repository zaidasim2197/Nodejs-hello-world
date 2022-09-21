console.log("I am server");
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("Hello World! From Zaids Computer")
  res.send('Hello World! From Zaids Computer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})