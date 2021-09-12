import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import PersistedStore from "./PersistedStore";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={PersistedStore.getDefaultStore().store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);