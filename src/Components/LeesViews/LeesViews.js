import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import lake from "../../Images/Lake.jpg";

const useStyles = makeStyles(() => ({
	appBar: {
		backgroundColor: "black",
		height: 64,
	},
	title: {
		flexGrow: 1,
		textAlign: "center",
		color: "white",
	},
	content: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: -1,
	},
	overlay: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		textAlign: "center",
		color: "white",
		zIndex: 1,
	},
}));

const LeesViews = () => {
	const classes = useStyles();

	return (
		<Box>
			<Box className={classes.content}>
				<img src={lake} alt="Lake" className={classes.image} />
				<div className={classes.overlay}>
					<Typography
						variant="h1"
						component="h1"
						color="black"
						fontWeight="bold"
					>
						Lee's Views
					</Typography>
					<Typography variant="h6" component="p" color="white">
						Your source for beautiful views
					</Typography>
				</div>
			</Box>
		</Box>
	);
};

export default LeesViews;
