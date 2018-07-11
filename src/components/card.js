import {h} from 'hyperapp';
import {socket} from '../app';
import {
  getRank,
  getSuit,
  getUnicodeSuit,
} from '../../../cards-common/src/get-rank-suit';
import validPlay from '../../../cards-common/src/valid-play';

function playCard(card) {
  return socket.emit('action', {
    type: 'play card',
    payload: {playedCard: card},
  });
}

export const Card = ({card}) => (state) => {
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
  const valid = validPlay(card, state);

  return (
    <li>
      {valid ?
        <a
          class={`card rank-${rank} ${suit}`}
          onclick={() => playCard(card)}
        >
          <span class='rank'>{rank}</span>
          <span class='suit'>{unicodeSuit}</span>
        </a> :
        <div class={`card rank-${rank} ${suit}`}>
          <span class='rank'>{rank}</span>
          <span class='suit'>{unicodeSuit}</span>
        </div>
      }
    </li>
  );
};
