import {createStore, combineReducers, applyMiddleware} from 'redux';
import CountReducer from './reducers/countReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
