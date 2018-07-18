import {h} from 'hyperapp';

import {Card} from './card';

export const PlayedCard = ({card}) => (
  card ?
    <div class='playingCards simpleCards played-card'>
      <Card card={card} />
    </div> : null
);
