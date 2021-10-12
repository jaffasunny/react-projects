import React, { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
// import { Prompt } from "react-router";
import courseStore from "../stores/courseStores";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
	const [errors, setErrors] = useState({});
	const [courses, setCourses] = useState(courseStore.getCourses());
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	});

	useEffect(() => {
		courseStore.addChangeListener(onChange);
		const slug = props.match.params.slug; // from the path '/courses/slug'
		if (courses.length === 0) {
			courseActions.loadCourses();
		} else if (slug) {
			setCourse(courseStore.getCourseBySlug(slug));
		}
		return () => courseStore.removeChangeListener(onChange);
	}, [props.match.params.slug, courses.length]);

	function onChange() {
		setCourse(courseStore.getCourses());
	}

	function handleChange({ target }) {
		setCourse({ ...course, [target.name]: target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!formIsValid()) return;
		courseActions.saveCourse(course).then(() => {
			props.history.push("/courses");
			toast.success("Course saved.");
		});
	}

	function formIsValid() {
		const _errors = {};

		if (!course.title) _errors.title = "Title is required";
		if (!course.authorId) _errors.authorId = "Author ID is required";
		if (!course.category) _errors.category = "Category is required";

		setErrors(_errors);
		return Object.keys(_errors).length === 0;
	}

	return (
		<>
			<h2>Manage Course</h2>
			{/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
			{/* {props.match.params.slug} */}
			<CourseForm
				errors={errors}
				course={course}
				onSubmit={handleSubmit}
				onChange={handleChange}
			/>
		</>
	);
};

export default ManageCoursePage;
