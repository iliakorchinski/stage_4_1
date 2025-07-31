import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import authRoutes from './routes/authRoutes';
import projectsRoutes from './routes/projectsRoutes';
import refreshTokenRoutes from './routes/refreshTokenRoutes';

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.use('/api', authRoutes);
app.use('/api', projectsRoutes);
app.use('/api', refreshTokenRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
