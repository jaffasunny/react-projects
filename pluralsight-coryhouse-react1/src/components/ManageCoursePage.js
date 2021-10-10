import React from "react";

const ManageCoursePage = (props) => {
	console.log(props.match.params.slug);
	return (
		<>
			<h2>Manage Course</h2>
			{props.match.params.slug}
		</>
	);
};

export default ManageCoursePage;
