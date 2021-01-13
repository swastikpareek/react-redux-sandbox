import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {increament, decreament, signIn, signOut} from '../../actions/counter';
import ConditionalView from '../../component/ConditionalView';

function Counter() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="container pt-2 pb-2">
      <h1 className="mb-5 text-center">Counter demo</h1>
        <ConditionalView condition={isLoggedIn}>
          <button className="btn btn-primary" onClick={()=> dispatch(signOut())}> Sign Out </button>
          <h2> Counter : {counter} </h2>
          <button className="btn btn-primary mr-2" onClick={()=> dispatch(increament())}> + </button>
          <button className="btn btn-primary" onClick={()=> dispatch(decreament())}> - </button>
        </ConditionalView>

        <ConditionalView condition={!isLoggedIn}>
          <button className="btn btn-primary" onClick={()=> dispatch(signIn())}> Log In </button>
        </ConditionalView>
    </div>
  );
}

export default Counter;
