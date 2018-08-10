/* global document */
import {h} from 'hyperapp';
import {socket} from '../app';

function enterPassword(password) {
  return socket.emit('action', {
    type: 'enter password',
    payload: {hash: password},
  });
}

function handlePass(e, setHash) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  setHash(password);
  enterPassword(password);
}

export function EnterPassword({setHash}) {
  return (
    <form class='enter-password' onsubmit={(e) => handlePass(e, setHash)}>
      <input id='password' type='password' />
      <button>Enter</button>
    </form>
  );
}
