/* global document */
import {h} from 'hyperapp';

function handlePass(e, setHash) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  setHash(password);
}

export function EnterPassword({setHash}) {
  return (
    <form onsubmit={(e) => handlePass(e, setHash)}>
      <input id='password' type='password' />
      <button>Enter</button>
    </form>
  );
}
