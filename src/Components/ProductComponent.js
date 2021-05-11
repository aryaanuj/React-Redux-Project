import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const ProductComponent = () => {
	const products = useSelector((state)=>state.allProducts.product);
	const renderList = products.map((product)=>{
		const {id,title,image,price,category} = product;
		return (<div className="col-md-3 py-2" key={id} >
			<div className="card" >
				<Link to={`/productDetail/${id}`} >
					<img src={image} className="card-img-top img-fluid text-center p-3" style={{height:"300px"}} alt={title} />
				</Link>
				<div className="card-body">
					<p className="card-title">{title}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><strong>Price $</strong>{price}</li>
					<li className="list-group-item"><strong>Category</strong> {category}</li>
				</ul>
			</div>
			
			</div>);
	});
	return (<div className="container py-3"><div className="row">{renderList}</div></div>);
}


export default ProductComponent;