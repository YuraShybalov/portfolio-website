import express from 'express';

import path from 'path';

import routes from './routes';
import { ApiError } from './utils/ApiError';
import { errorMiddleware } from './middleware/error.middleware';

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use(() => {
  throw new ApiError(404, 'Route not found');
});

app.use(errorMiddleware);

export default app;
