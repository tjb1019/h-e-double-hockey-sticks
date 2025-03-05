import express from "express";

import { successResponse } from "./utils";

const router = express.Router();
const BASE_URL = "/auth";

router.post(BASE_URL, (req, res) => {
	return successResponse(res, { data: "sample data" }, 202);
});

export default router;
