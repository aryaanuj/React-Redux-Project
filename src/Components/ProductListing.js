import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/ProductActions.js';
import ProductComponent from './ProductComponent.js';

const ProductListing = () => {

	const dispatch = useDispatch();

	const fetchProducts = async () =>{
		const response = await axios.get("http://fakestoreapi.com/products").catch((err)=>{
			console.log(err);
		});
		dispatch(setProducts(response.data));
	}

	useEffect(()=>{
		fetchProducts();
	}, []);

	return (
		<div>
			<ProductComponent />
		</div>
	);
}


export default ProductListing;