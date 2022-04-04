const { chatDataBase } = require('./database');

const retrieveData = async () => {
try{
const res = await chatDataBase.query("SELECT * FROM chatbot_response");
console.log(res.rows);
}catch (e){
    console.error(e)
}
}
retrieveData()