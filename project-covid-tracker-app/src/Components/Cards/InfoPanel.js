import * as React from "react";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import cx from "classnames";
import styles from "./InfoPanel.module.css";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContents: "center",
		alignItems: "center",
		marginTop: 50,
	},
	cards: {
		maxWidth: "300px",
		margin: "0 auto",
		marginBottom: "20px",
	},
	container: {
		margin: "0 auto",
		width: "80%",
		// marginRight: "20px",
	},
});

export default function InfoPanel({
	data: { confirmed, recovered, deaths, lastUpdate },
}) {
	const classes = useStyles();
	if (!confirmed) {
		return "Loading";
	} else {
		// console.log(props.data);

		return (
			<div className={classes.container}>
				<Grid
					container
					spacing={3}
					className={classes.root}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid
						item
						component={Card}
						xs={12}
						sm={4}
						sx={{ boxShadow: 3 }}
						className={cx(classes.cards, styles.infected)}>
						<CardContent cl>
							<Typography color="textSecondary" gutterBottom>
								Infected
							</Typography>
							<Typography variant="h5">
								<CountUp
									start={0}
									end={confirmed.value}
									duration={2.5}
									separator=","
								/>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								No of Active cases of COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						sm={4}
						sx={{ boxShadow: 3 }}
						className={cx(classes.cards, styles.recovered)}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Recovered
							</Typography>
							<Typography variant="h5">{recovered.value}</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								No of recoveries from COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						sm={4}
						sx={{ boxShadow: 3 }}
						className={cx(classes.cards, styles.deaths)}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Deaths
							</Typography>
							<Typography variant="h5">{deaths.value}</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								No of deaths caused by COVID-19
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</div>
		);
	}
}
