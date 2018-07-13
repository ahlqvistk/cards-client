import {h} from 'hyperapp';

import {Card} from './card';

export const Hand = ({cards}) => (
  <div class='playingCards simpleCards'>
    <ul class='hand'>
      {cards.map((card) => (
        <Card card={card} inHand={true} key={card} />
      ))}
    </ul>
  </div>
);
