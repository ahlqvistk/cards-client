/* global document */
import {h} from 'hyperapp';

function togglePassword() {
  const passwordElement = document.getElementById('password-field');
  passwordElement.hidden = !passwordElement.hidden;
}

export function CreateTable() {
  return (
    <form class='create-table' action='/table' method='post'>
      <label for='id'>Table ID:</label>
      <input type='text' id='id' name='id' />

      <label for='public'>Public</label>
      <input
        type='radio'
        id='public'
        name='type'
        onchange={() => togglePassword()}
        checked
      />

      <label for='private'>Private</label>
      <input
        type='radio'
        id='private'
        name='type'
        onchange={() => togglePassword()}
      />

      <div id='password-field' hidden>
        <label for='password'>Password:</label>
        <input type='password' id='password' name='password' />
      </div>

      <button type='submit'>Create table</button>
    </form>
  );
}
