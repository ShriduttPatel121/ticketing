import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.get('/api/users/currentuser',(req, res) => {
    res.send('Hi From Shridutt!!!28');
})

app.listen(3000, () => {
    console.log("Auth Server started at 3000!!!!");
})