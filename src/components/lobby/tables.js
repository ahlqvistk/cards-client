/* global document */
import {h} from 'hyperapp';

export function Tables({
  setLocation,
  showCreateTableModal,
  tables,
  toggleCreateTableModal,
}) {
  function getLocation() {
    return 'table/' + document.getElementById('table-select').value;
  }

  return (
    <div class={(showCreateTableModal ? 'modal-open ' : '') + 'tables'}>
      <select id='table-select' size='10'>
        {tables.length ?
          tables.map((table) => (
            <option value={table.id}>{table.id} ({table.type})</option>
          )) :
          <option>No available tables</option>
        }
      </select>
      {tables.length ?
        <button onclick={() => setLocation(getLocation())}>Join table</button> :
        null
      }
      <button onclick={() => toggleCreateTableModal()}>Create table</button>
    </div>
  );
}
