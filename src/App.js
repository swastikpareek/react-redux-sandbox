import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './apps/Counter/index.js';
import counterReducer from './reducers/counter';

const CounterStore = createStore(counterReducer);

export default function App() {
  return (
    <div>
     <Provider store={CounterStore} >
       <Counter />
     </Provider>
    </div>
  );
}
