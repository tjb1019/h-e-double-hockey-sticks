import express from 'express';
import { Standing, StandingsResponse } from '../types/nhl-api/standings';
import { Team } from '../types/teams';
import { successResponse } from './utils';

const router = express.Router();
const BASE_URL = '/teams';

router.get(BASE_URL, async (_, res) => {
  const response = await fetch('https://api-web.nhle.com/v1/standings/now');
  const json = (await response.json()) as StandingsResponse;
  const teams: Team[] = json.standings.map((standing: Standing) => ({
    id: standing.teamAbbrev.default,
    name: standing.teamName.default,
    logo: standing.teamLogo,
  }));
  return successResponse(res, teams);
});

export default router;
