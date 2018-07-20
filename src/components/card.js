import {h} from 'hyperapp';
import {socket} from '../app';
import {
  getRank,
  getSuit,
  getUnicodeSuit,
  validPlay,
} from 'cards-common';

function playCard(card) {
  return socket.emit('action', {
    type: 'play card',
    payload: {playedCard: card},
  });
}

export const Card = ({card, inHand, winner}) => (state) => {
  if (card === 'back') {
    return (
      inHand ?
        <li>
          <div class='card back'></div>
        </li> :
        <div class='card back'></div>
    );
  }

  const rank = getRank(card);
  const suit = getSuit(card);
  const unicodeSuit = getUnicodeSuit(card);
  const valid = inHand ? validPlay(card, state) : false;

  return (
    inHand ?
      <li>
        {valid && state.status === 'playing' ?
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
      </li> :
      <div
        class={`card rank-${rank} ${suit}` + (winner ? ' winning-card' : '')}
      >
        <span class='rank'>{rank}</span>
        <span class='suit'>{unicodeSuit}</span>
      </div>

  );
};
