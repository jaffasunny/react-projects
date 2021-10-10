import React from "react";
import { Link } from "react-router-dom";
import Shoes from "./../shoes.json";
import { useParams } from "react-router-dom";

export default function Product() {
	let { id } = useParams();
	const shoe = Shoes[id];

	console.log(shoe);
	return (
		<div>
			<h1>Welcome to Product</h1>
			<div className="productContainer">
				{Object.keys(Shoes).map((keyName) => {
					const shoe = Shoes[keyName];
					return (
						<Link key={keyName} className="link" to={`/product/${keyName}`}>
							<h3>{shoe.name}</h3>
							<img src={shoe.img} alt="Shoe Image" />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
