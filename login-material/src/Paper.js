import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./paper.module.css";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
	box: {
		display: "flex",
		flexDirection: "column",
		width: "300px",
		height: "500px",
		margin: "0 auto",
		marginTop: "1.3rem",
		textAlign: "center",
	},
	paper: {
		paddingTop: "20px",
	},
});

export default function SimplePaper() {
	const classes = useStyles();
	return (
		<Box className={classes.box}>
			<Paper elevation={3} className={classes.paper}>
				<h1>Login</h1>
				<div className={classes.textFields}>
					<TextField label="Enter Email" variant="standard" />
					<TextField label="Password" variant="standard" />
				</div>
				<Button variant="contained" sx={{ margin: "20px" }}>
					Contained
				</Button>
			</Paper>
		</Box>
	);
}
