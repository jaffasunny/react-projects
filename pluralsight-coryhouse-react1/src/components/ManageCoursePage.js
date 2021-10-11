import React, { useState } from "react";
import CourseForm from "./CourseForm";
// import { Prompt } from "react-router";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	});

	function handleChange({ target }) {
		setCourse({ ...course, [target.name]: target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		courseApi.saveCourse(course);
	}

	return (
		<>
			<h2>Manage Course</h2>
			{/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
			{/* {props.match.params.slug} */}
			<CourseForm
				course={course}
				onSubmit={handleSubmit}
				onChange={handleChange}
			/>
		</>
	);
};

export default ManageCoursePage;
