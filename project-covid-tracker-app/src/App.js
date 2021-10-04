// import styles from "./App.module.css";
import { useEffect, useState } from "react";
import InfoPanel from "./Components/Cards/InfoPanel";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Navbar from "./Components/NavBar/Navbar";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		async function getData() {
			const response = await fetch("https://covid19.mathdro.id/api");
			const { confirmed, recovered, deaths, lastUpdate } =
				await response.json();

			setData({
				confirmed,
				recovered,
				deaths,
				lastUpdate,
			});
		}
		getData();
	}, []);

	return (
		<div>
			<Navbar />
			<InfoPanel data={data}/>
			<Chart />
			<CountryPicker />
		</div>
	);
}

export default App;
