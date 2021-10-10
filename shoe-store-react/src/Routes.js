import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import ProductItem from "./Components/ProductItem";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";

export default function RouteConfig() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/about" exact component={About}></Route>
					<Route path="/productitem" exact component={ProductItem}></Route>
					<Route path="/product" exact component={Product}></Route>
					<Route path="/product/:id" exact component={Product}></Route>
					<Route
						path="*"
						exact
						component={() => <h2>404 not found</h2>}></Route>
				</Switch>
			</Router>
		</div>
	);
}
