import {h} from 'hyperapp';
import {getRank, getSuit, getUnicodeSuit} from '../func/get-rank-suit';

export const Card = ({card}) => {
  if (card === 'back') {
    return (
      <li>
        <div class='card back'></div>
      </li>
    );
  }

  const rank = getRank(card);
  const suit = getSuit(card);
  const unicodeSuit = getUnicodeSuit(card);

  return (
    <li>
      <a class={`card rank-${rank} ${suit}`}>
        <span class='rank'>{rank}</span>
        <span class='suit'>{unicodeSuit}</span>
      </a>
    </li>
  );
};
