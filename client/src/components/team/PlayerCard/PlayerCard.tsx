import { Avatar, Card, Stack, Text } from "@mantine/core";
import type { FC } from "react";

interface PlayerCardProps {
	player: {
		firstName: { default: string };
		lastName: { default: string };
		headshot: string;
	};
}

export const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
	return (
		<Card
			key={player.firstName.default + player.lastName.default}
			w={250}
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
		>
			<Stack align="center">
				<Avatar src={player.headshot} size="xl" />
				<Text size="xl" fw="bold">
					{`${player.firstName.default} ${player.lastName.default}`}
				</Text>
			</Stack>
		</Card>
	);
};
