/* global document */
import {h} from 'hyperapp';
import {socket} from '../app';

function joinTable(name, hash) {
  return socket.emit('action', {
    type: 'join table',
    payload: {
      hash,
      name,
    },
  });
}

function handleJoin(e, setHash) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const hash = password;
  setHash(hash);
  joinTable(name, hash);
}

export function JoinTable({type, setHash}) {
  return (
    <form class='join-table' onsubmit={(e) => handleJoin(e, setHash)}>
      <div>
        <input id='name' type='name' placeholder='Name' />
      </div>
      {type === 'private' ?
        <div>
          <input id='password' type='password' placeholder='Password' />
        </div> :
        <div>
          <input id='password' type='hidden' value='' />
        </div>
      }
      <button>Enter</button>
    </form>
  );
}
