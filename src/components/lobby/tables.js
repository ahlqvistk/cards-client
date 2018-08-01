/* global document */
import {h} from 'hyperapp';

export function Tables({setLocation, tables}) {
  function getLocation() {
    return 'table/' + document.getElementById('table-select').value;
  }

  return (
    <div class='tables'>
      <select id='table-select' size='10'>
        {tables.length ?
          tables.map((table) => (
            <option value={table.id}>{table.id}</option>
          )) :
          <option>No available tables</option>
        }
      </select>
      {tables.length ?
        <button onclick={() => setLocation(getLocation())}>Join table</button> :
        null
      }
    </div>
  );
}
