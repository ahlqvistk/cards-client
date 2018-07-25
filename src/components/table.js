import {h} from 'hyperapp';
import {socket} from '../app';
import {invalidBids} from 'cards-common';

import {Bidding} from './bidding';
import {Player} from './player';
import {Scoreboard} from './scoreboard';
import {Trump} from './trump';

function startGame() {
  return socket.emit('action', {type: 'start game'});
}

export const Table = () => (state) => (
  <div class='table'>
    {state.players.map((player, index) => (
      <Player
        active={state.activePlayer === player.socket.id}
        bid={player.bid >= 0 ? player.bid : '-'}
        cards={player.hasOwnProperty('cards') ? player.cards : []}
        dealer={state.dealer === player.socket.id}
        id={player.socket.id}
        index={index}
        key={player.socket.id}
        playedCard={
          player.hasOwnProperty('playedCard') ? player.playedCard : ''
        }
        points={
          player.hasOwnProperty('points') ?
            player.points.reduce((acc, cur) => acc + cur) : 0
        }
        status={state.status}
        tricks={player.tricks ? player.tricks : 0}
        winner={player.socket.id === state.trickWinner}
      />
    ))}
    {state.trump ?
      <Trump card={state.trump} /> : null
    }
    {state.status === 'bidding' && state.activePlayer === state.id ?
      <Bidding
        disabled={invalidBids(state)}
        max={state.players[0].cards.length}
      /> : null
    }
    {state.creator === state.id && state.status === 'waiting to start game' ?
      <button class='start-button' onclick={startGame}>Start</button> :
      null
    }
    {state.status === 'showing scoreboard' ?
      <Scoreboard players={state.players} /> : null
    }
  </div>
);
