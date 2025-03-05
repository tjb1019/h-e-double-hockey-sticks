import express from 'express';
import { Team } from '../types/teams';
import { successResponse } from './utils';

const router = express.Router();
const BASE_URL = '/teams';

router.get(BASE_URL, async (_, res) => {
  const response = await fetch('https://api-web.nhle.com/v1/standings/now');
  const json = (await response.json()) as any;
  const teams: Team[] = json.standings.map((team: any) => ({
    id: team.teamAbbrev.default,
    name: team.teamName.default,
    logo: team.teamLogo,
  }));
  return successResponse(res, teams);
});

export default router;
