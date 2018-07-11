/* eslint no-console: 0 */
/* global console, document */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Table} from './components/table';

const state = {};
const actions = {
  getState: () => (state) => state,
  setState: (state) => (state),
};

const view = (state) => (
  state.hasOwnProperty('players') ?
    <div class='app'>
      <Table state={state} />
    </div> : null
);

const main = app(state, actions, view, document.body);
const getState = main.getState;

const socket = io();
const state$ = fromEvent('state', socket);

state$.debounce(100).observe((state) => {
  console.log(state);
  main.setState(state);
});

export {
  getState,
  socket,
};
