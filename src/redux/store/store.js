import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createEncryptor from "redux-persist-transform-encrypt"

const encryptor = createEncryptor({
  secretKey: "my-super-secret-key",
  onError(error) {
    // Handle the error.
    console.log(error)
  },
})


const persistConfig = {
  key: 'root',
  storage: storage,
  transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);
export {store, persistor};
