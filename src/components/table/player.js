import {h} from 'hyperapp';

import {Hand} from './hand';
import {Markers} from './markers';
import {PlayedCard} from './played-card';

export const Player = ({
  active,
  bid,
  cards,
  dealer,
  name,
  playedCard,
  playerLength,
  playerNumber,
  points,
  status,
  tricks,
  winner,
}) => (
  playerNumber === 1 ?
    <div class={'player player-' + playerNumber}>
      <PlayedCard card={playedCard} winner={winner} />
      <Markers
        active={active}
        bid={bid}
        dealer={dealer}
        points={points}
        show={
          status !== 'waiting for players' &&
          status !== 'waiting to start game'
        }
        tricks={tricks}
      />
      <Hand cards={cards} />
      <div class='player-name'>{name}</div>
    </div> :
    <div class={'player player-' + playerNumber + '-' + playerLength}>
      <div class='player-name'>{name}</div>
      <Hand cards={cards} />
      <Markers
        active={active}
        bid={bid}
        dealer={dealer}
        points={points}
        show={
          status !== 'waiting for players' &&
          status !== 'waiting to start game'
        }
        tricks={tricks}
      />
      <PlayedCard card={playedCard} winner={winner} />
    </div>
);
