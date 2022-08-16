import { Response, Router } from 'express';

const router = Router();

router.get('/', (_, res: Response) => {
  res.send('api!');
});

export default router;
