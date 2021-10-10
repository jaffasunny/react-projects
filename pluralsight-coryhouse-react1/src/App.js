import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/CoursePage";
import HomePage from "./components/HomePage";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Route path="/" exact component={HomePage} />
			<Route path="/courses" component={CoursePage} />
			<Route path="/about" component={AboutPage} />
		</div>
	);
}

export default App;
