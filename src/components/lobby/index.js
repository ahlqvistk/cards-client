import {h} from 'hyperapp';

import {Tables} from './tables';

export function Lobby({lobby, setLocation}) {
  return (
    <div class='lobby'>
      <Tables setLocation={setLocation} tables={lobby.tables} />
    </div>
  );
}
