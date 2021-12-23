const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.send(`
    <h1>Hello World!</h1>
    <!--script 안의 콘솔은 브라우저 콘솔창에 찍히게 된다.-->
    <script>console.log('hello world');</script>
    `)
    //여기서의 콘솔은 서버가 돌아가는 콘솔에 찍히게 된다.
    console.log('request');
});
//plus버튼을 누르면 count 1씩 더해서 리턴
app.get('/api/plus', (req, res) => {
    console.log(`/api/plus`);
    let count;
    connection.promise().query('SELECT count from express', (error, rows) => {
        if (error)
            throw error;
        count = rows[0].count;
        console.log(`previous count : ${count}`);
    }).then(() => {
        connection.query(`UPDATE express SET count=${count}`, (error) => {
            if (error) throw error;
            console.log(`current count : ${count}`);
        });
    }
    ).then(() => {
        res.send({ count });
    });

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

const mysql = require('mysql2');
const db_config = require('./db-config.json');
const connection = mysql.createConnection({
    host: db_config.host,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database
});

connection.connect();

//test
// connection.query('SELECT count from express', (error, rows) => {
//     if (error) throw error;
//     console.log(rows);	//[ RowDataPacket { count: 0 } ]
//     console.log(rows[0].count);	//0
// });