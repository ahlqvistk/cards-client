import {h} from 'hyperapp';

import {CreateTable} from './create-table';
import {Tables} from './tables';

export function Lobby({
  lobby,
  setLocation,
  showCreateTableModal,
  toggleCreateTableModal,
}) {
  return (
    <div class='lobby'>
      <Tables
        setLocation={setLocation}
        showCreateTableModal={showCreateTableModal}
        tables={lobby.tables}
        toggleCreateTableModal={toggleCreateTableModal}
      />
      {
        showCreateTableModal &&
        <CreateTable toggleCreateTableModal={toggleCreateTableModal}/>
      }
    </div>
  );
}
