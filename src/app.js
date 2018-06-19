/* eslint no-console: 0 */
/* global document */
import {h, app} from 'hyperapp';
import {fromEvent} from 'most';
import io from 'socket.io-client';

const socket = io();
const state$ = fromEvent('state', socket);

const actions = () => {};

const view = (state) => (
  <h1>Cards Client</h1>
);

state$.observe((state) => {
  app(state, actions, view, document.body);
});
