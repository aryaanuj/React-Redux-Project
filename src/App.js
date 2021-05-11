import React from 'react';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () =>{

	return (   
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={ProductListing} />
					<Route path="/productDetail/:pid" exact component={ProductDetail} />
					<Route>Error: 404 Page Not Found</Route>
				</Switch>
			</Router>
		</React.Fragment>
		);
}

export default App;
