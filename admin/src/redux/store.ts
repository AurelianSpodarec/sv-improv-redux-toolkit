import { Dispatch } from 'react';
import { createStore, applyMiddleware, Action } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer, { RootState } from './reducers';

const middleWare = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)));

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): Dispatch<Action<any>> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
