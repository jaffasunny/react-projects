import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	const activeStyle = { color: "orange" };
	return (
		<nav>
			<NavLink activeStyle={activeStyle} exact to="/">
				Home
			</NavLink>
			{" | "}
			<NavLink activeStyle={activeStyle} to="/courses">
				Courses
			</NavLink>
			{" | "}
			<NavLink activeStyle={activeStyle} to="/about">
				About
			</NavLink>
		</nav>
	);
}
