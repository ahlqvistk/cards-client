import {h} from 'hyperapp';

export const Markers = ({active, bid, dealer, points, show, tricks}) => (
  show ? <div class='markers'>
    <span class='bid'>Bid: {bid}</span>
    <span class='tricks'>Tricks: {tricks}</span>
    <span class='points'>Points: {points}</span>
    <span>
      {active ? <span class='active'>A</span> : null}
      {dealer ? <span class='dealer'>D</span> : null}
    </span>
  </div> : null
);
