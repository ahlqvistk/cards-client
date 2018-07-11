import {h} from 'hyperapp';
import {socket} from '../app';

function placeBid(bid) {
  return socket.emit('action', {type: 'place bid', payload: {bid}});
}

export const Bid = ({disabled, max}) => (
  <div class='bid'>
    {[...Array(max + 1).keys()].map((n) => (
      <button
        disabled={disabled.includes(n)}
        onclick={() => placeBid(n)}
      >{n}</button>
    ))}
  </div>
);
