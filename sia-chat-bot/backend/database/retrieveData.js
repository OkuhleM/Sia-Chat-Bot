const { chatDataBase } = require('./database');

const retrieveData = async (limit,offset) => {
try{
const res = await chatDataBase.query("SELECT * FROM chatbot_response ORDER BY id ");
console.log(res.rows);
}catch (e){
    console.error(e)
}
}
exports.module={retrieveData}
// LIMIT $1 OFFSET $2,[limit,offset]