import express from 'express';
import { successResponse } from './utils';

const router = express.Router();
const BASE_URL = '/ping';

router.get(BASE_URL, (_, res) => {
  return successResponse(res, 200, '', 'pong');
});

export default router;