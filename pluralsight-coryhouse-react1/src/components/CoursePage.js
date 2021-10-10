import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseLists from "./CourseLists";

function CoursePage() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		getCourses().then((_courses) => setCourses(_courses));
	}, []);

	return (
		<>
			<h2>Courses</h2>
			<CourseLists courses={courses} />
		</>
	);
}

export default CoursePage;
