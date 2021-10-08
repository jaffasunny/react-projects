import styles from "./App.module.css";
import { useEffect, useState } from "react";
import InfoPanel from "./Components/Cards/InfoPanel";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Navbar from "./Components/NavBar/Navbar";
import { fetchData } from "./api/index";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		async function getData() {
			const fetchedData = await fetchData();
			setData(fetchedData);
		}
		getData();
	});

	return (
		<div className={styles.main}>
			<Navbar className={styles.navBar} />
			<InfoPanel data={data} />
			<Chart />
			<CountryPicker />
		</div>
	);
}

export default App;
