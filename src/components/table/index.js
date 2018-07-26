import {h} from 'hyperapp';
import {socket} from '../../app';
import {invalidBids} from 'cards-common';

import {Bidding} from './bidding';
import {Player} from './player';
import {Scoreboard} from './scoreboard';
import {Trump} from './trump';

function startGame() {
  return socket.emit('action', {type: 'start game'});
}

export const Table = ({game}) => (
  <div class='table'>
    {game.players.map((player, index) => (
      <Player
        active={game.activePlayer === player.socket.id}
        bid={player.bid >= 0 ? player.bid : '-'}
        cards={player.hasOwnProperty('cards') ? player.cards : []}
        dealer={game.dealer === player.socket.id}
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
        status={game.status}
        tricks={player.tricks ? player.tricks : 0}
        winner={player.socket.id === game.trickWinner}
      />
    ))}
    {game.trump ?
      <Trump card={game.trump} /> : null
    }
    {game.status === 'bidding' && game.activePlayer === game.id ?
      <Bidding
        disabled={invalidBids(game)}
        max={game.players[0].cards.length}
      /> : null
    }
    {game.creator === game.id && game.status === 'waiting to start game' ?
      <button class='start-button' onclick={startGame}>Start</button> :
      null
    }
    {game.status === 'showing scoreboard' ?
      <Scoreboard players={game.players} /> : null
    }
  </div>
);
