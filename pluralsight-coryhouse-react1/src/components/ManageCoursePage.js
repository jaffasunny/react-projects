import React from "react";
import { Prompt } from "react-router";

const ManageCoursePage = (props) => {
	console.log(props.match.params.slug);
	return (
		<>
			<h2>Manage Course</h2>
			{/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
			{props.match.params.slug}
		</>
	);
};

export default ManageCoursePage;
