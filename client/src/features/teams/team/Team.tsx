import type { FC } from 'react';
import { useLocation, useParams } from 'react-router';
import { Group } from '../../../components/group/Group';
import { Stack } from '../../../components/stack/Stack';
import { Title } from '../../../components/title/Title';
import { useRoster } from '../../../hooks/useRoster';
import { PlayerCard } from './PlayerCard/PlayerCard';
import styles from './Team.module.css';

export const Team: FC = () => {
  const { teamId = 'PHI' } = useParams();
  const { state } = useLocation();
  const { team } = state;
  const { data: roster } = useRoster(teamId);
  const { defensemen, forwards, goalies } = roster || {};

  if (!defensemen || !forwards || !goalies) return null;

  return (
    <div className={styles.root}>
      <header style={{ marginBottom: '3rem' }}>
        <Group alignItems="center" gap="0">
          <img className={styles.teamLogo} src={team.logo} alt="team logo" />
          <Title size="xl">{team.name}</Title>
        </Group>
      </header>
      <Stack gap="2rem">
        <Stack>
          <Title size="sm">Forwards</Title>
          <Group flexWrap="wrap">
            {forwards.map((forward) => {
              return <PlayerCard key={forward.headshot} player={forward} />;
            })}
          </Group>
        </Stack>
        <Stack>
          <Title size="sm">Defensemen</Title>
          <Group flexWrap="wrap">
            {defensemen.map((defenseman) => {
              return <PlayerCard key={defenseman.headshot} player={defenseman} />;
            })}
          </Group>
        </Stack>
        <Stack>
          <Title size="sm">Goalies</Title>
          <Group flexWrap="wrap">
            {goalies.map((goalie) => {
              return <PlayerCard key={goalie.headshot} player={goalie} />;
            })}
          </Group>
        </Stack>
      </Stack>
    </div>
  );
};
