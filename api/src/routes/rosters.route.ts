import express from "express";
import { successResponse } from "./utils";

const router = express.Router();
const BASE_URL = "/rosters";

router.get(`${BASE_URL}/:teamId`, async (req, res) => {
	const { teamId } = req.params;
	const response = await fetch(
		`https://api-web.nhle.com/v1/roster/${teamId}/20242025`,
	);
	const json = await response.json();
	return successResponse(res, json);
});

export default router;
