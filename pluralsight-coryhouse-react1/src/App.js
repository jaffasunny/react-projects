import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/CoursePage";
import HomePage from "./components/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/courses" component={CoursePage} />
				<Route path="/about" component={AboutPage} />
				<Redirect from="/about-page" to="/about" />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
