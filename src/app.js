/* eslint no-console: 0 */
/* global console, document */
import {fromEvent} from 'most';
import io from 'socket.io-client';

const socket = io();
const state$ = fromEvent('state', socket);
state$.observe((state) => console.log(state));

const el = document.getElementById('app');
el.innerHTML = '<h1>Cards Client</h1>';
