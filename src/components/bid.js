import {h} from 'hyperapp';

export const Bid = ({disabled, max, socket}) => {
  function placeBid(bid) {
    return socket.emit('action', {type: 'place bid', payload: {bid}});
  }

  return (
    <div class='bid'>
      {[...Array(max + 1).keys()].map((n) => (
        <button
          disabled={disabled.includes(n)}
          onclick={() => placeBid(n)}
        >{n}</button>
      ))}
    </div>
  );
};
