import { Response, Router } from 'express';

const api = Router();

api.get('/', (_, res: Response) => {
  res.send('api!');
});

export default api;
