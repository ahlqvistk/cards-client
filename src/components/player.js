import {h} from 'hyperapp';

import {Card} from './card';
import {Hand} from './hand';

export const Player = ({active, cards, dealer, id, index, playedCard}) => (
  index === 0 ?
    <div class={'player player-' + index}>
      {playedCard ?
        <div class='playingCards simpleCards played-card'>
          <Card card={playedCard} />
        </div> : null
      }
      {active ? <span class='active'>A</span> : null}
      {dealer ? <span class='dealer'>D</span> : null}
      {cards.length ?
        <Hand cards={cards} /> : null
      }
      <div class='player-id'>{id}</div>
    </div> :
    <div class={'player player-' + index}>
      <div class='player-id'>{id}</div>
      {cards.length ?
        <Hand cards={cards} /> : null
      }
      {active ? <span class='active'>A</span> : null}
      {dealer ? <span class='dealer'>D</span> : null}
      {playedCard ?
        <div class='playingCards simpleCards played-card'>
          <Card card={playedCard} />
        </div> : null
      }
    </div>
);
