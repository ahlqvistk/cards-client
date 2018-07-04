import {h} from 'hyperapp';

import {Player} from './player';

export const Table = ({players}) => (
  <div class='table'>
    {players.map((player, index) => (
      <Player
        cards={player.hasOwnProperty('cards') ? player.cards : []}
        id={player.socket.id}
        index={index}
        key={player.socket.id}
      />
    ))}
  </div>
);
