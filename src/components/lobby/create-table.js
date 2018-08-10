/* global document */
import {h} from 'hyperapp';

function togglePassword() {
  const passwordElement = document.getElementById('password-field');
  passwordElement.hidden = !passwordElement.hidden;
}

export function CreateTable({toggleCreateTableModal}) {
  return (
    <div class='create-table'>
      <div
        class='create-table-modal-back'
        onclick={() => toggleCreateTableModal()}></div>
      <form class='create-table-form' action='/table' method='post'>
        <div>
          <input type='text' name='id' placeholder='Table ID' />
        </div>

        <div>
          <label for='public'>Public</label>
          <input
            type='radio'
            id='public'
            name='type'
            onchange={() => togglePassword()}
            value='public'
            checked
          />

          <label for='private'>Private</label>
          <input
            type='radio'
            id='private'
            name='type'
            value='private'
            onchange={() => togglePassword()}
          />
        </div>

        <div id='password-field' hidden>
          <input type='password' name='password' placeholder='Password' />
        </div>

        <button type='submit'>Create table</button>
      </form>
    </div>
  );
}
