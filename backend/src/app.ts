import express, { Request, Response } from 'express';
import { FeedbackStore } from './feedback';
import cors from 'cors';


const app = express();
const feedbackStore = new FeedbackStore();
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/feedback', (req: Request, res: Response) => {
  res.json(feedbackStore.getAllFeedback());
});

app.post('/feedbacks', (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ error: 'Name and feedback are required' });
  }
  const newFeedback = feedbackStore.addFeedback({ name, feedback });
  res.status(201).json(newFeedback);
});

export default app