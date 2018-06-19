/* eslint no-console: 0 */
/* global document */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

import './scss/style.scss';

const socket = io();
const state$ = fromEvent('state', socket);

const actions = () => {};

const view = (state) => (
  <div class='table'>
    {state.players.map((player, index) => (
      <span class={'player player-' + index}>{player}</span>
    ))}
  </div>
);

state$.observe((state) => {
  app(state, actions, view, document.body);
});
