import {h} from 'hyperapp';

import {Bid} from './bid';
import {Player} from './player';
import {Trump} from './trump';

export const Table = ({state}) => (
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
    {state.status === 'bidding' ?
      <Bid max={state.players[0].cards.length} /> : null
    }
  </div>
);
