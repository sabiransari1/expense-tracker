import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from '../redux/user/userReducer';
import { userdataReducer } from '../redux/userdata/userdataReducer';

const rootElement = combineReducers({ userReducer, userdataReducer });

export const store = legacy_createStore(rootElement, applyMiddleware(thunk));
