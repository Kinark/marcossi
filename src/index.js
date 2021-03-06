import React from 'react';
import { render } from 'react-dom';
import App from '~/App';
import './styles.global.scss'
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root')

render(<BrowserRouter><App /></BrowserRouter>, root);

if (module.hot) {
   module.hot.accept()
}
