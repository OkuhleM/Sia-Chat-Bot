const { chatDataBase } = require('./database')


const modifyData = async () => {
const [id, response_message] = process.argv.slice(2);
console.log(process.argv.slice(2).join(" "))
try{
    const res = await chatDataBase.query("UPDATE chatbot_response SET response_message = $1 WHERE id = $2",[
        response_message, id
    ]);
    console.log(`updated the chatbot_response response_message to ${response_message}`)
} catch(e){
    console.error(e);
}
}
modifyData()