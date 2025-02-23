import express from 'express';

const router = express.Router();
const BASE_URL = '/ping';

router.get(BASE_URL, (_, res) => {
  return res.send('pong');
});

export default router;