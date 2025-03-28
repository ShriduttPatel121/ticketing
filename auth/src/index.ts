import express from 'express';
import { json } from 'body-parser';
import { userRoutes } from './routes';
import { customResponses } from './middleware/customResponse';
import { errorHandler as globalErrorHandler } from './middleware/errorHandler';

const app = express();

app.use(json());
app.use(customResponses);
app.use('/api/users/', userRoutes);

app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log("Auth Server started at 3000!!!!");
})