const { chatDataBase } = require('../database/database')

 const solutions = async () =>{
    var insertData =   process.argv.slice(2).join(" ");
    console.log(process.argv.slice(2).join(" "))
    try{
    const res = await chatDataBase.query(
        "INSERT INTO solutions (options) VALUES ($1)",
        [insertData]
    );
    console.log(`Responded with  ${insertData}`);}
    catch(err){
        console.error(err)
    }
}

solutions()