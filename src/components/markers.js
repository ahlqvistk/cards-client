import {h} from 'hyperapp';

export const Markers = ({active, bid, dealer, show, tricks}) => (
  <div class='markers'>
    {show ? <span class='bid'>Bid: {bid}</span> : null}
    {show ? <span class='tricks'>Tricks: {tricks}</span> : null}
    <span>
      {active ? <span class='active'>A</span> : null}
      {dealer ? <span class='dealer'>D</span> : null}
    </span>
  </div>
);
