import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStores";
import CourseLists from "./CourseLists";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursePage() {
	const [courses, setCourses] = useState(courseStore.getCourses());

	useEffect(() => {
		courseStore.addChangeListener(onChange);
		if (courseStore.getCourses().length === 0) loadCourses();
		return () => courseStore.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setCourses(courseStore.getCourses());
	}
	return (
		<>
			<h2>Courses</h2>
			<Link className="btn btn-primary" to="/course">
				Add Course
			</Link>
			<CourseLists courses={courses} deleteCourse={deleteCourse} />
		</>
	);
}

export default CoursePage;
