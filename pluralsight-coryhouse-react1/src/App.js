import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/CoursePage";
import HomePage from "./components/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import ManageCoursePage from "./components/ManageCoursePage";

function App() {
	// Always remember add the more specific routes at top of less specific routes
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/courses" component={CoursePage} />
				<Route path="/course/:slug" component={ManageCoursePage} />
				<Route path="/course" component={ManageCoursePage} />
				<Route path="/about" component={AboutPage} />
				<Redirect from="/about-page" to="/about" />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
