/* eslint no-console: 0 */
/* global console, document, window */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

import {Table} from './components/table';

const state = {
  game: {},
};

const actions = {
  getState: () => (state) => state,
  setGame: (game) => (state) => ({game}),
};

const view = (state) => (
  state.game.hasOwnProperty('players') ?
    <div class='app'>
      <Table game={state.game} />
    </div> : null
);

const main = app(state, actions, view, document.body);
const getState = main.getState;

const socket = io(window.location.pathname);
const gameState$ = fromEvent('state', socket);

gameState$.debounce(100).observe((game) => {
  console.log(game);
  main.setGame(game);
});

export {
  getState,
  socket,
};
