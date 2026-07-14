import express from 'express';
import profileRoutes from './modules/profile/profile.routes';

const app = express();

app.use(express.json());
app.use('/api/profile', profileRoutes);

export default app;
