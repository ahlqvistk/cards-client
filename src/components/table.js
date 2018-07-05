import {h} from 'hyperapp';

import {Player} from './player';

export const Table = ({state}) => (
  <div class='table'>
    {state.players.map((player, index) => (
      <Player
        cards={player.hasOwnProperty('cards') ? player.cards : []}
        id={player.socket.id}
        index={index}
        key={player.socket.id}
      />
    ))}
  </div>
);
