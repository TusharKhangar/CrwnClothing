import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';


// Permette di vedere il flusso di azione che vengono dispatch
const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    thunk,
].filter(Boolean);

// Permette di utilizzare più middlewares
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
  
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
  
export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);
  
export const persistor = persistStore(store);