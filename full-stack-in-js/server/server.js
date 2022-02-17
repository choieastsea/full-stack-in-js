const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  // res.send('Hello World!');
  res.send(`
    <h1>Hello World!</h1>
    <!--script 안의 콘솔은 브라우저 콘솔창에 찍히게 된다.-->
    <script>console.log('hello world');</script>
    `);
  //여기서의 콘솔은 서버가 돌아가는 콘솔에 찍히게 된다.
  console.log("request");
});
//mysql connection & api
const mysql = require("mysql2/promise");
const db_config = require("./db-config.json");
const pool = mysql.createPool({
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
});
app.get("/api/get", async (req, res) => {
  try {
    const [row] = await pool.query("SELECT count from express");
    const { count } = row[0];
    res.send({ count });
  } catch (e) {
    console.log(e);
  }
});
app.get("/api/plus", async (req, res) => {
  try {
    const [row] = await pool.query("SELECT count from express");
    let { count } = row[0];
    console.log("current count : " + count);
    count += 1;
    console.log("modified count : " + count);
    await pool.query(`UPDATE express SET count=${count}`);
    res.send({ count });
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
