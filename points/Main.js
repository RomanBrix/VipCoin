import React from 'react';
import { render } from 'react-dom';
import  App from '../components/main'
import css from '../css/scss/main/index.sass';

const init = document.getElementById('mountNode');
render(<App/>, init);
