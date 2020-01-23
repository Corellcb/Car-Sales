import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { Carreducer } from './components/reducers/Carreducer';

const store = createStore(Carreducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, 
rootElement
);
