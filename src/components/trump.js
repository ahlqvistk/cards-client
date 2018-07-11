import {h} from 'hyperapp';
import {
  getRank,
  getSuit,
  getUnicodeSuit,
} from '../../../cards-common/src/get-rank-suit';

export const Trump = ({card}) => {
  const rank = getRank(card);
  const suit = getSuit(card);
  const unicodeSuit = getUnicodeSuit(card);

  return (
    <div class='trump'>
      <div class='playingCards inText'>
        <div class={`card rank-${rank} ${suit}`}>
          <span class='rank'>{rank}</span>
          <span class='suit'>{unicodeSuit}</span>
        </div>
      </div>
    </div>
  );
};
