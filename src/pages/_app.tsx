import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../reducers'
import '../styles/index.css'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppProps } from 'next/app'
const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: [''] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducers);


const middleware = applyMiddleware(reduxThunk);

const store: any = createStore(pReducer, middleware);
persistStore(store);

export const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}


export default _app
