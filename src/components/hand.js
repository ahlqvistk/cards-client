import {h} from 'hyperapp';

import {Card} from './card';

export const Hand = ({cards}) => (
  <div class='playingCards simpleCards'>
    <ul class='hand'>
      {cards.length ?
        cards.map((card) => (
          <Card card={card} inHand={true} key={card} />
        )) : null
      }
    </ul>
  </div>
);
