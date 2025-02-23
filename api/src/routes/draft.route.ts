import express from 'express';
import { successResponse } from './utils';

const router = express.Router();
const BASE_URL = '/draft';

router.get(BASE_URL, async (_, res) => {
  const response = await fetch('https://api-web.nhle.com/v1/draft/rankings/now');
  const json = await response.json();
  return successResponse(res, 200, '', json);
});

export default router;