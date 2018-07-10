import {h} from 'hyperapp';

import {invalidBids} from '../func/invalid-bids';

import {Bid} from './bid';
import {Player} from './player';
import {Trump} from './trump';

export const Table = ({socket, state}) => (
  <div class='table'>
    {state.players.map((player, index) => (
      <Player
        cards={player.hasOwnProperty('cards') ? player.cards : []}
        dealer={state.dealer === player.socket.id}
        id={player.socket.id}
        index={index}
        key={player.socket.id}
      />
    ))}
    {state.trump ?
      <Trump card={state.trump} /> : null
    }
    {state.status === 'bidding' && state.activePlayer === state.id ?
      <Bid
        disabled={invalidBids(state)}
        max={state.players[0].cards.length}
        socket={socket}
      /> : null
    }
  </div>
);
