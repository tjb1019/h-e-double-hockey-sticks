import { Card, Group, Image, Stack, Text } from "@mantine/core";
import type { FC } from "react";
import { Link } from "react-router";
import { useTeams } from "../../hooks/useTeams";
import styles from "./Teams.module.css";

export const Teams: FC = () => {
	const { data: teams = [] } = useTeams();

	return (
		<div className={styles.root}>
			<Group>
				{teams.map((team) => {
					return (
						<Link key={team.id} to={`/teams/${team.id}`} state={{ team }}>
							<Card
								className={styles.teamCard}
								w="300px"
								shadow="sm"
								padding="lg"
								radius="md"
								withBorder
							>
								<Stack align="center">
									<Image src={team.logo} />
									<Text size="xl" fw="bold">
										{team.name}
									</Text>
								</Stack>
							</Card>
						</Link>
					);
				})}
			</Group>
		</div>
	);
};
