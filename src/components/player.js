import {h} from 'hyperapp';

import {Card} from './card';
import {Hand} from './hand';
import {Markers} from './markers';

export const Player = ({active, bid, cards, dealer, id, index, playedCard}) => (
  index === 0 ?
    <div class={'player player-' + index}>
      {playedCard ?
        <div class='playingCards simpleCards played-card'>
          <Card card={playedCard} />
        </div> : null
      }
      <Markers
        active={active}
        bid={bid}
        dealer={dealer}
        show={cards.length > 0}
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
        show={cards.length > 0}
      />
      {playedCard ?
        <div class='playingCards simpleCards played-card'>
          <Card card={playedCard} />
        </div> : null
      }
    </div>
);
