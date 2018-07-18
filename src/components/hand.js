import {h} from 'hyperapp';

import {Card} from './card';

export const Hand = ({cards}) => {
  const width = 3.5 + 1.1 * cards.length;

  return (
    cards.length ?
      <div class='playingCards simpleCards'>
        <ul
          class='hand'
          style={{
            height: '7.05em',
            width: `${width}em`,
          }}>
          {cards.length ?
            cards.map((card) => (
              <Card card={card} inHand={true} key={card} />
            )) : null
          }
        </ul>
      </div> : null
  );
};
