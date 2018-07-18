import {h} from 'hyperapp';

export const Markers = ({active, bid, dealer, show}) => (
  <div class='markers'>
    {show ? <span class='bid'>Bid: {bid}</span> : null}
    {active ? <span class='active'>A</span> : null}
    {dealer ? <span class='dealer'>D</span> : null}
  </div>
);
