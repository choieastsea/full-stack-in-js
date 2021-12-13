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
let count = 0;
//plus버튼을 누르면 count 1씩 더해서 리턴
app.get('/api/plus', (req, res) => {
    count += 1;
    res.send({ count });
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});