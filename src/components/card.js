import {h} from 'hyperapp';

export const Card = ({card}) => (
  <div class={'card card-' + card}>
    {card}
  </div>
);
