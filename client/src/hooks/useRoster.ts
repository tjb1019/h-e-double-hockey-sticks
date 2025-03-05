import { useQuery } from "@tanstack/react-query";

export const useRoster = (teamId: string) => {
	return useQuery({
		queryKey: [teamId],
		queryFn: async () => {
			const response = await fetch(
				`http://localhost:5000/api/rosters/${teamId}`,
			);
			const json = await response.json();
			return JSON.parse(JSON.stringify(json));
		},
		select: (data) => data.payload,
	});
};
