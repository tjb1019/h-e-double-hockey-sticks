import { ResponseBody } from '@api/routes/utils';
import { useQuery } from '@tanstack/react-query';

type Player = {
  firstName: { default: string };
  lastName: { default: string };
  headshot: string;
};

type RosterResponse = {
  forwards: Player[];
  defensemen: Player[];
  goalies: Player[];
};

export const useRoster = (teamId: string) => {
  return useQuery({
    queryKey: [teamId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/api/rosters/${teamId}`);
      const json = (await response.json()) as ResponseBody<RosterResponse>;
      return json;
    },
    select: (data) => data.payload,
  });
};
