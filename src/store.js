import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import barReducer from './reducers/barReducer';
import pieReducer from './reducers/pieReducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  barchart: barReducer,
  piechart: pieReducer
});

const reducer = (state,action) => combinedReducer(state,action);
const makeStore = () => {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require('redux-persist');
    const persistedReducer = persistReducer(
      {
        storage,
        key: 'reactjs',
        whitelist: ['barchart','piechart'] // only counter will be persisted, add other reducers if needed
      },
      reducer
    ); // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ); // Creating the store again

    store._persistor = persistStore(store); // This creates a persistor object & push that persisted object to ._persistor, so that we can avail the persistability feature

    return store;
};

export const configureStore = makeStore;