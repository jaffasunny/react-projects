import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	maxWidth: 1000,
	margin: "0 auto",
	marginTop: 50,
}));

export default function InfoPanel(props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Item sx={{ boxShadow: 3 }}>Grid 1</Item>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Item sx={{ boxShadow: 3 }}>Grid 2</Item>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Item sx={{ boxShadow: 3 }}>Grid 3</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
