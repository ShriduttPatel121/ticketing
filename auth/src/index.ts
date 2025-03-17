import express from 'express';
import { json } from 'body-parser';
import { userRoutes } from './routes';

const app = express();

app.use(json());
app.get('/api/users/123', (req, res) => {
    console.log("LOG::")
    res.send("HIII");
});
app.use('/api/users/', userRoutes);

app.listen(3000, () => {
    console.log("Auth Server started at 3000!!!!");
})