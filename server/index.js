const mysql = require("mysql2");
const cors = require('cors');
const express = require("express");
const app = express();




const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "devops",
  password: "neWork2023"
});


connection.connect(err=>{
  if(err){
    console.log(err);
    return err;
  } else {
    console.log("its OK");
  }
})

let query = 'SELECT * FROM user';

let res;
connection.query(query, (err, result, field) => {
  res = result[0].name;
});
connection.end();

const corsOptions = {
  origin: 'http://localhost:3000',
  credential: true,
  optionSeccessStatus: 200
}
app.use(cors(corsOptions))
app.get('/api', (request, response)=>{
  response.json({
    name: res
  })
})
const PORT = 3001
app.listen(PORT, ()=>{
  const url = `http://localhost:${PORT}`;
  console.log( `listening on ${url}`);
})