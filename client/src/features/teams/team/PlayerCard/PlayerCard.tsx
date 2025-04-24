import type { FC } from 'react';
import { Card } from '../../../../components/card/Card';
import { Stack } from '../../../../components/stack/Stack';
import { Text } from '../../../../components/text/Text';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
  player: {
    firstName: { default: string };
    lastName: { default: string };
    headshot: string;
  };
}

export const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  return (
    <Card key={player.firstName.default + player.lastName.default}>
      <Stack alignItems="center">
        <img className={styles.headshot} src={player.headshot} alt="player headshot" />
        <Text size="xl" fontWeight="bold">
          {`${player.firstName.default} ${player.lastName.default}`}
        </Text>
      </Stack>
    </Card>
  );
};
