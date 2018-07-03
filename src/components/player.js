import {h} from 'hyperapp';

export const Player = ({cards, id, index}) => (
  <div class={'player player-' + index}>
    <div class='player-id'>{id}</div>
  </div>
);
