import express from 'express';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/authRoutes';
import projectsRoutes from './routes/projectsRoutes';

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.use('/api', authRoutes);
app.use('/api', projectsRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
