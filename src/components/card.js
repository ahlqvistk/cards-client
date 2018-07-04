import {h} from 'hyperapp';

export const Card = ({card}) => (
  <li>
    <div class={'card rank-7 spades'}>
      <span class="rank">7</span>
      <span class="suit">&spades;</span>
    </div>
  </li>
);
