import { Avatar, Card, Group, Image, Stack, Title } from "@mantine/core";
import type { FC } from "react";
import { useLocation, useParams } from "react-router";
import { useRoster } from "../../hooks/useRoster";
import { PlayerCard } from "./PlayerCard/PlayerCard";

export const Team: FC = () => {
	const { teamId = "PHI" } = useParams();
	const { state } = useLocation();
	const { team } = state;
	const { data: roster = {} } = useRoster(teamId);
	const { defensemen, forwards, goalies } = roster;

	if (!defensemen || !forwards || !goalies) return null;

	return (
		<div>
			<Group align="center" gap="xs" mb="md">
				<Image src={team.logo} h={75} />
				<Title>{team.name}</Title>
			</Group>
			<Stack mb="lg">
				<Title order={4}>Forwards</Title>
				<Group>
					{forwards.map((forward) => {
						return <PlayerCard key={forward.headshot} player={forward} />;
					})}
				</Group>
			</Stack>
			<Stack mb="lg">
				<Title order={4}>Defensemen</Title>
				<Group>
					{defensemen.map((defenseman) => {
						return <PlayerCard key={defenseman.headshot} player={defenseman} />;
					})}
				</Group>
			</Stack>
			<Stack>
				<Title order={4}>Goalies</Title>
				<Group>
					{goalies.map((goalie) => {
						return <PlayerCard key={goalie.headshot} player={goalie} />;
					})}
				</Group>
			</Stack>
		</div>
	);
};
