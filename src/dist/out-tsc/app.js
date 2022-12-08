import express from 'express';
import { monthlySales } from './app/dashboard/dashboard-components/monthly-sales/monthly-sales-data';
const app = express();
app.post('/data', (req, res) => {
    res.json(monthlySales);
});
app.listen(5000, () => console.log("server is running"));
//# sourceMappingURL=app.js.map