const express = require("express");
const app = express()
const port = 1000
const { insertData}=require('./database/insertData')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/insert-data",(req,res)=>{
    const action = insertData(req.body)
    if (action.length > 0) res.send(action).status(404)
    res.send({message:`${res}, menu`}).status(201)
})


app.listen(port, () => {
    console.log(`listening on port${port}`)
})