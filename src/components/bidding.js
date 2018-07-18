import {h} from 'hyperapp';
import {socket} from '../app';

function placeBid(bid) {
  return socket.emit('action', {type: 'place bid', payload: {bid}});
}

export const Bidding = ({disabled, max}) => (
  <div class='bidding'>
    {[...Array(max + 1).keys()].map((n) => (
      <button
        disabled={disabled.includes(n)}
        onclick={() => placeBid(n)}
      >{n}</button>
    ))}
  </div>
);
