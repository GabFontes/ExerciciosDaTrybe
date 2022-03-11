import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, } from 'redux';
import carReducer from '../../redux/carReducer';
import trafficReducer from '../../redux/trafficReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({carReducer, trafficReducer}), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
export default renderWithRedux;