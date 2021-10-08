import React from "react";
import Shoes from "./../shoes.json";

export default function Product() {
	return (
		<div>
			<h1>Welcome to Product 1</h1>
			<div className="productContainer">
				{Object.keys(Shoes).map((keyName) => {
					const shoe = Shoes[keyName];
					return (
						<div key={keyName}>
							<h2>{shoe.name}</h2>
							<img src={shoe.img} alt="Shoe Image" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
