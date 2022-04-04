var { Pool } = require('pg');

var chatDataBase = new Pool({
    user: "postgres",
    host: 'localhost',
    database: 'chatbot',
    password: 'Lindokuhle!22',
    port: 5432,
})

// const initClient = async () => {
   
//     const getStudent = await chatDataBase.connect()
//     return getStudent
// } 

module.exports = {
chatDataBase
}