import express from 'express';
import userRoute from './routers/user.routes';
import { errHandler, notFoundHandler } from './middlewares/error-handler.middleware';
import connectDB from './configs/mongo-db';

const app = express();
const PORT = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errHandler);

app.use('/auth', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(notFoundHandler);
