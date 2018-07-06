import {h} from 'hyperapp';

export const Bid = ({max}) => (
  <div class='bid'>
    {[...Array(max + 1).keys()].map((n) => (
      <button>{n}</button>
    ))}
  </div>
);
