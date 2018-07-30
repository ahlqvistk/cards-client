import {h} from 'hyperapp';

import {Hand} from './hand';
import {Markers} from './markers';
import {PlayedCard} from './played-card';

export const Player = ({
  active,
  bid,
  cards,
  dealer,
  id,
  index,
  playedCard,
  points,
  status,
  tricks,
  winner,
}) => (
  index === 0 ?
    <div class={'player player-' + index}>
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
      <div class='player-id'>{id}</div>
    </div> :
    <div class={'player player-' + index}>
      <div class='player-id'>{id}</div>
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