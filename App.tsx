import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { RootNavigator } from './navigation/RootNavigator';

const App = () => (
  <Provider store={store}>
    <TailwindProvider utilities={utilities}>
      <RootNavigator />
    </TailwindProvider>
  </Provider>
);

export default App;
