/* eslint no-console: 0 */
/* global console, document */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Table} from './components/table';

const socket = io();
const state$ = fromEvent('state', socket);

const actions = () => {};

function startGame() {
  return socket.emit('action', {type: 'start game'});
}

const view = (state) => (
  <div class='app'>
    <Table players={state.players} />
    {state.creator === state.id && state.status === 'waiting to start game' ?
      <button class='start-button' onclick={startGame}>Start</button> :
      null
    }
  </div>
);

state$.debounce(100).observe((state) => {
  console.log(state);
  app(state, actions, view, document.body);
});
