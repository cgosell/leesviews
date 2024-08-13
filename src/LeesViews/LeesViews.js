import boat from "../Images/Boat.jpg";
import hammock from "../Images/Hammock.jpg";
import lake from "../Images/Lake.jpg";
import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Container,
	Grid,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	overlay: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		textAlign: "center",
	},
}));

const LeesViews = () => {
	const classes = useStyles();
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
	const isMobile = window.innerWidth <= 600;

	const handleDrawerToggle = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<Box>
			{isMobile ? (
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Lee's Views
						</Typography>
						<IconButton
							edge="end"
							color="inherit"
							aria-label="menu"
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			) : (
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Lee's Views
						</Typography>
					</Toolbar>
				</AppBar>
			)}
			{isMobile ? (
				<Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
					<List>
						<ListItem button onClick={handleDrawerToggle}>
							<ListItemText primary="Home" />
						</ListItem>
					</List>
				</Drawer>
			) : null}
			<Container>
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
					</div>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={4}>
						<img src={boat} alt="Boat" className={classes.image} />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<img src={hammock} alt="Hammock" className={classes.image} />
					</Grid>
					{/* Add more images here */}
				</Grid>
			</Container>
		</Box>
	);
};

export default LeesViews;
