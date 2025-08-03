

import 'dotenv/config';
import express from 'express'
import conectDb from './db.js'
import userRoute from './route/userRoute.js'

try {
  await conectDb();
} catch (e) {
  console.log(e.message);
}


const app=express()
const port=3000

app.use(express.json())

app.use("/user",userRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})