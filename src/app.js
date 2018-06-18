/* eslint no-console: 0 */
/* global console, document */
import io from 'socket.io-client';

const socket = io();
socket.on('state', (data) => {
    console.log(data);
});

const el = document.getElementById('app');
el.innerHTML = '<h1>Cards Client</h1>';
