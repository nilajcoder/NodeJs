
import 'dotenv/config';
import express from 'express'
import conectDb from "./db.js";

import productroute from "./routes/productRoute.js"




try {
  await conectDb();
} catch (e) {
  console.log(e.message);
}
const app=express()
const port=3000

app.use(express.json())
app.use("/products",productroute)


// list   -> /products GET
// delete -> /products/sdfdsfsdf/delete POST
// add    -> /products POST
// update -> /products/sdfds/update POST


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
