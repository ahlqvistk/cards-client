/* eslint no-console: 0 */
/* global console, document, window */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Lobby} from './components/lobby';
import {CreateTable} from './components/lobby/create-table';
import {EnterPassword} from './components/enter-password';
import {Table} from './components/table';

const state = {
  hash: '',
  lobby: {
    tables: [],
  },
  location: '',
  showCreateTableModal: false,
  table: {},
};

const actions = {
  getState: () => (state) => state,
  setHash: (hash) => (state) => ({hash}),
  setLobby: (lobby) => (state) => ({lobby}),
  setLocation: (location) => (state) => {
    if (location !== window.location.pathname) {
      window.location = location;
    }
    return {location};
  },
  setTable: (table) => (state) => ({table}),
  toggleCreateTableModal: () => (state) => ({
    showCreateTableModal: !state.showCreateTableModal,
  }),
};

const view = (state) => (
  <div class='app'>
    {state.location === '/' &&
      <Lobby
        lobby={state.lobby}
        setLocation={main.setLocation}
        toggleCreateTableModal={main.toggleCreateTableModal}
      />
    }

    {state.location === '/' && state.showCreateTableModal &&
      <CreateTable />
    }

    {state.location.startsWith('/table/') &&
      (state.table.hash === state.hash || state.table.type === 'public' ?
        <Table table={state.table} /> :
        <EnterPassword setHash={main.setHash} />
      )
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
