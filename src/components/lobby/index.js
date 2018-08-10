import {h} from 'hyperapp';

import {Tables} from './tables';

export function Lobby({
  lobby,
  setLocation,
  showCreateTableModal,
  toggleCreateTableModal,
}) {
  return (
    <div class={(showCreateTableModal ? 'modal-open ' : '') + 'lobby'}>
      <Tables
        setLocation={setLocation}
        tables={lobby.tables}
        toggleCreateTableModal={toggleCreateTableModal}
      />
    </div>
  );
}
