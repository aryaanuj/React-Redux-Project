import {combineReducers} from 'redux';
import {products,selectedProducts} from './productsReducer';

const fakeShopStore = combineReducers({
	allProducts:products,
	selectedProduct:selectedProducts
});

export default fakeShopStore;