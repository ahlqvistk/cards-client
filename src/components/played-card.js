import {h} from 'hyperapp';

import {Card} from './card';

export const PlayedCard = ({card, winner}) => (
  card ?
    <div class='playingCards simpleCards played-card'>
      <Card card={card} winner={winner} />
    </div> : null
);
