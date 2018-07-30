/* eslint no-console: 0 */
/* global console, document, window */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Lobby} from './components/lobby';
import {Table} from './components/table';

const state = {
  lobby: {
    tables: [],
  },
  location: '',
  table: {},
};

const actions = {
  getState: () => (state) => state,
  setLobby: (lobby) => (state) => ({lobby}),
  setLocation: (location) => (state) => {
    if (location !== window.location.pathname) {
      window.location = location;
    }
    return {location};
  },
  setTable: (table) => (state) => ({table}),
};

const view = (state) => (
  <div class='app'>
    {state.location === '/' ?
      <Lobby lobby={state.lobby} setLocation={main.setLocation} /> :
      <Table table={state.table} />
    }
  </div>
);

const main = app(state, actions, view, document.body);
const getState = main.getState;

const location = window.location.pathname;
const socket = io(location);
main.setLocation(location);

const lobby$ = fromEvent('lobby', socket);
const table$ = fromEvent('table', socket);

lobby$.debounce(100).observe((lobby) => {
  console.log(lobby);
  main.setLobby(lobby);
});

table$.debounce(100).observe((table) => {
  console.log(table);
  main.setTable(table);
});

export {
  getState,
  socket,
};
