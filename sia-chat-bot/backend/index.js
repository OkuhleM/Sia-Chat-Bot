const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const chatbotResponse = require("./config/chatbotResponse.json");
const { insertData } = require("./database/insertData");
const { retrieveData } = require("./database/retrieveData");
const dataAcquired = require("./config/dataAcquired.json")

app.use(express.json());
app.use(cors());
app.post("/insert-data", (req, res) => {
  const action = insertData(req.body);
  if (action.length > 0) res.send(action).status(404);
  res.send({ message: `${res}, menu` }).status(201);
});
app.post("/post-message", (req, res) => {
  const { l, o } = req.body;
  const data = retrieveData(l, o);
  res.json(data);
});

app.get("/get-message", async (req, res) => {
  let response = chatbotResponse.chatBotResponse;
  console.log(response);
  res.send(response);
});

app.get("/get-button-messages", async (req, res) => {
  let response = dataAcquired.dataResponse;
  console.log(JSON.stringify(response,null, 2));
  res.send(response);
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
