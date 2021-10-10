import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/CoursePage";
import HomePage from "./components/HomePage";

function App() {
	function getPage() {
		const route = window.location.pathname;
		if (route === "/about")
			return (
				<div className="App">
					<AboutPage />
				</div>
			);
		if (route === "/courses")
			return (
				<div className="App">
					<CoursePage />
				</div>
			);
		return <HomePage />;
	}

	return (
		<div className="container-fluid">
			<Header />
			{getPage()}
		</div>
	);
}

export default App;
