/* global document */
import {h} from 'hyperapp';

export function Tables({setLocation, tables}) {
  function getLocation() {
    return 'table/' + document.getElementById('table-select').value;
  }

  return (
    <div class='tables'>
      <select id='table-select' size='10'>
        {
          tables.length ?
            tables.map((table) => (
              <option value={table.name}>{table.name}</option>
            )) :
            <option>No available tables</option>
        }
      </select>
      <button onclick={() => setLocation(getLocation())}>Join table</button>
    </div>
  );
}
