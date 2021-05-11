import {createStore} from 'redux';
import fakeShopStore from './reducers/index.js';

const store = createStore(fakeShopStore,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;