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

export const Table = ({table}) => {
  return table.hasOwnProperty('players') ?
    <div class='table'>
      {table.players.map((player, index) => (
        <Player
          active={table.activePlayer === player.socket.id}
          bid={player.bid >= 0 ? player.bid : '-'}
          cards={player.hasOwnProperty('cards') ? player.cards : []}
          dealer={table.dealer === player.socket.id}
          index={index}
          key={player.socket.id}
          name={player.name}
          playedCard={
            player.hasOwnProperty('playedCard') ? player.playedCard : ''
          }
          points={
            player.hasOwnProperty('points') ?
              player.points.reduce((acc, cur) => acc + cur) : 0
          }
          status={table.status}
          tricks={player.tricks ? player.tricks : 0}
          winner={player.socket.id === table.trickWinner}
        />
      ))}
      {table.trump ?
        <Trump card={table.trump} /> : null
      }
      {table.status === 'bidding' && table.activePlayer === table.id ?
        <Bidding
          disabled={invalidBids(table)}
          max={table.players[0].cards.length}
        /> : null
      }
      {table.creator === table.id && table.status === 'waiting to start game' ?
        <button class='start-button' onclick={startGame}>Start</button> :
        null
      }
      {table.status === 'showing scoreboard' ?
        <Scoreboard players={table.players} /> : null
      }
    </div> : null;
};
