import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import api from './api/controller';

const app = express();
const port = 3000;

app.use('/api', api);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
