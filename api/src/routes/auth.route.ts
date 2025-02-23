import express from 'express';

import { successResponse } from './utils';

const router = express.Router();
const BASE_URL = '/auth';

router.post(BASE_URL, (req, res) => {
  return successResponse(res, 202, '', { data: 'sample data' });
});

export default router;