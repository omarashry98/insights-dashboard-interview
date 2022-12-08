import express from 'express';
import cors from 'cors';
import { monthlySales } from './app/dashboard/dashboard-components/monthly-sales/monthly-sales-data.js';

const app = express();

app.use(cors());

app.get('/data', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(monthlySales);
});

app.listen(5000, 'localhost', () => console.log("server is running"));