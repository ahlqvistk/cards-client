import {h} from 'hyperapp';

export function Tables({tables}) {
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
      <button>Join room</button>
    </div>
  );
}
