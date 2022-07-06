const { chatDataBase } = require("./database");

const insertData = async () => {
  // const [response_message] = process.argv.slice(2).join(" ");
  var test = process.argv.slice(2).join(" ");
  console.log(process.argv.slice(2).join(" "));
  try {
    const res = await chatDataBase.query(
      "INSERT INTO chatbot_response (response_message) VALUES ($1)",
      [test]
    );
    
    console.log(`Responded with Hello ${test}`);
  } catch (err) {
    console.error(err);
  }
};

insertData();
