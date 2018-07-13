import {h} from 'hyperapp';

import {Card} from './card';
import {Hand} from './hand';

export const Player = ({active, cards, dealer, id, index, playedCard}) => (
  <div class={'player player-' + index}>
    {active ? <span class='active'>A</span> : null}
    {dealer ? <span class='dealer'>D</span> : null}
    {cards.length ?
      <Hand cards={cards} /> :
      <div class='player-id'>{id}</div>
    }
    {playedCard ?
      <div class='playingCards simpleCards played-card'>
        <Card card={playedCard} />
      </div> : null
    }
  </div>
);
