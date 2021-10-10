import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<div class="h-100 p-5 bg-light border rounded-3">
			<h1>Pluralsight Administration</h1>
			<p>React, Flux and React Router for ultra-responsive web apps.</p>
			<Link to="/about" className="btn btn-primary">
				About
			</Link>
		</div>
	);
}
