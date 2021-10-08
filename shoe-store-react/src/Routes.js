import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import ProductItems from "./Components/ProductItems";
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
					<Route path="/productitems" exact component={ProductItems}></Route>
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
