import React from "react";
import {Provider} from 'react-redux'
import configureStore from './store/createStore'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
