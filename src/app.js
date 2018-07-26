/* eslint no-console: 0 */
/* global console, document, window */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Table} from './components/table';

const state = {
  table: {},
};

const actions = {
  getState: () => (state) => state,
  setTable: (table) => (state) => ({table}),
};

const view = (state) => (
  <div class='app'>
    <Table table={state.table} />
  </div>
);

const main = app(state, actions, view, document.body);
const getState = main.getState;

const socket = io(window.location.pathname);
const table$ = fromEvent('table', socket);

table$.debounce(100).observe((table) => {
  console.log(table);
  main.setTable(table);
});

export {
  getState,
  socket,
};
