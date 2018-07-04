import {h} from 'hyperapp';

import {Hand} from './hand';

export const Player = ({cards, id, index}) => (
  <div class={'player player-' + index}>
    {cards.length ?
      <Hand cards={cards} /> :
      <div class='player-id'>{id}</div>
    }
  </div>
);
