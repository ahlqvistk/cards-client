import {h} from 'hyperapp';

import {Tables} from './tables';

export function Lobby({lobby}) {
  return (
    <div class='lobby'>
      <Tables tables={lobby.tables} />
    </div>
  );
}
