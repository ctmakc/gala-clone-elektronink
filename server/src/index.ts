import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { submitForm } from './promotion';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/start-campaign', async (req, res) => {
  const { niche, message, urls, data } = req.body;
  console.log(`Starting campaign for niche: ${niche}`);
  
  const targetUrls = urls || []; // In a real app, find URLs for the niche
  
  // Background processing
  (async () => {
    for (const url of targetUrls) {
      console.log(`Processing ${url}...`);
      await submitForm(url, {
        name: data?.name || 'Gala Agent',
        email: data?.email || 'gala@elektronink.org.ua',
        message: message
      });
      // Rate limit to avoid spam detection (as mentioned on the legal page)
      await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes
    }
  })();

  res.json({ 
    success: true, 
    message: 'Campaign started successfully in background',
    campaignId: Math.random().toString(36).substring(7)
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
