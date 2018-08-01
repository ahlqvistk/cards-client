/* global */
import {h} from 'hyperapp';

export function CreateTable() {
  return (
    <form class='create-table' action='/table' method='post'>
      <label for='id'>Table ID:</label>
      <input type='text' id='id' name='id' />

      <label for='public'>Public</label>
      <input type='radio' id='public' name='type' />

      <label for='private'>Private</label>
      <input type='radio' id='private' name='type' />

      <button type='submit'>Create table</button>
    </form>
  );
}
