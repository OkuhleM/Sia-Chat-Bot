const express = require("express");
const app = express()
const port = 4000
const { insertData}=require('./database/insertData');
const {retrieveData} = require("./database/retrieveData")
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post("/insert-data",(req,res)=>{
    const action = insertData(req.body)
    if (action.length > 0) res.send(action).status(404)
    res.send({message:`${res}, menu`}).status(201)
})
app.post("/post-message",(req,res)=>{
    const{l,o}=req.body
    const data = retrieveData(l,o)
    res.json(data)
})

app.get("/get-message",async (req,res)=>{
    console.log("first")
    const{l,o}=req.body
    const data = await retrieveData(l,o)
    res.json(data)
})
app.listen(port, () => {
    console.log(`listening on port${port}`)
})