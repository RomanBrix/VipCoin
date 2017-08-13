import React from 'react';
import { render } from 'react-dom';
import  App from '../components/main'
import MainCSS from '../css/scss/main.scss';
import css from '../css/scss/main/index.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
