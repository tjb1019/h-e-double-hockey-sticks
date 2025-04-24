import { type FC } from 'react';
import { Link } from 'react-router';
import { Card } from '../../components/card/Card';
import { Stack } from '../../components/stack/Stack';
import { Text } from '../../components/text/Text';
import { useTeams } from '../../hooks/useTeams';
import styles from './Teams.module.css';

export const Teams: FC = () => {
  const { data: teams = [] } = useTeams();

  return (
    <>
      <div className={styles.root} style={{ marginTop: '100px' }}>
        {teams.map((team) => {
          return (
            <Link key={team.id} to={`/teams/${team.id}`} state={{ team }} className={styles.link}>
              <Card>
                <Stack alignItems="center">
                  <img className={styles.teamLogo} src={team.logo} alt="team logo" />
                  <Text fontWeight="bold">{team.name}</Text>
                </Stack>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};
