import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import VehicleList from './components/VehicleList/VehicleList';
import './global-styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
        <VehicleList />
      </main>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.root')
);
