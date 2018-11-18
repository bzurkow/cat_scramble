import React from 'react';
import { Provider } from 'react-redux';

import Application from './src';
import perstore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {perstore.store}>
      	<PersistGate loading={null} persistor={perstore.persistor}>
        	<Application />
        </PersistGate>
      </Provider>
    );
  }
};