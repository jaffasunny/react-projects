import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { countries } from "../../api";

function CountryPicker() {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchedCountries = async () => {
			setFetchedCountries(await countries);
		};
	}, [setFetchedCountries]);
	return (
		<div>
			<FormControl>
				<NativeSelect>
					<option value="global">Global</option>
				</NativeSelect>
			</FormControl>
		</div>
	);
}

export default CountryPicker;
