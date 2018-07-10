import {h} from 'hyperapp';

import {Hand} from './hand';

export const Player = ({active, cards, dealer, id, index}) => (
  <div class={'player player-' + index}>
    {cards.length ?
      <Hand cards={cards} /> :
      <div class='player-id'>{id}</div>
    }
    {active ? <span class='active'>A</span> : null}
    {dealer ? <span class='dealer'>D</span> : null}
  </div>
);
