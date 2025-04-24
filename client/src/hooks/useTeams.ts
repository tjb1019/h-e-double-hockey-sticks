import { Team } from '@api/types/teams';
import { useQuery } from '@tanstack/react-query';

export const useTeams = () => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/teams');
      const json = await response.json();
      return JSON.parse(JSON.stringify(json));
    },
    select: (data) => data.payload as Team[],
  });
};
