import { h, app } from 'hyperapp';

import state from './js/state.js'
import actions from './js/actions.js';
import view from './js/view.js';

import './index.scss';

const main = app(state, actions, view, document.getElementById('app'));