import React,{useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {Link,useParams} from 'react-router-dom';
import {selectedProduct,removeSelectedProduct} from '../redux/actions/ProductActions';

const ProductDetail = () => {
	const {pid} = useParams();

	const dispatch = useDispatch();
	const products = useSelector((state)=>state.selectedProduct);
	const fetchDetails = async () =>{
		const response = await axios.get(`https://fakestoreapi.com/products/${pid}`).catch((err)=>{
			console.log(err);
		});
		dispatch(selectedProduct(response.data));
	}

	useEffect(()=>{
		if(pid && pid!=="") fetchDetails();
		return () => {
			dispatch(removeSelectedProduct());
		}
	}, [pid]);

	const {id,title,image,price,category,description} = products;

	return (
		Object.keys(products).length===0
		?
		(<div className="text-center">Loading...</div>)
		:(<div className="container py-3">
			<div className="py-2" key={id} >
				<div className="card" >
					<div className="row">
						<div className="col-md-5" style={{borderRight:"1px solid lightgray"}}>
							<img src={image} className="card-img-top img-fluid text-center p-3" alt={title} />
						</div>
						<div className="col-md-6 card-body">
							<h5 className="card-title">{title}</h5>
							<p><strong>Price $</strong>{price}</p>
							<p><strong>Category:</strong> {category}</p>
							<p className="card-text">{description}</p>
						</div>
					</div>
				</div>
			</div>
			</div>));
}


export default ProductDetail;