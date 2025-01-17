import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Button,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: 64,
	},
	title: {
		flexGrow: 1,
		textAlign: "left",
		color: "white",
	},
}));

const NavBar = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isMobile = window.innerWidth <= 768;

	const handleDrawerToggle = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const handleNavigation = (path) => {
		navigate(path);
		setIsDrawerOpen(false);
	};

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<Typography
					onClick={() => handleNavigation("/")}
					variant="h6"
					className={classes.title}
				>
					Lee's Views
				</Typography>

				{isMobile ? (
					<>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="right"
							open={isDrawerOpen}
							onClose={handleDrawerToggle}
						>
							<List>
								<ListItem button onClick={() => handleNavigation("/")}>
									<ListItemText primary="Home" />
								</ListItem>
								<ListItem button onClick={() => handleNavigation("/gallery")}>
									<ListItemText primary="Gallery" />
								</ListItem>
							</List>
						</Drawer>
					</>
				) : (
					<Box display="flex" justifyContent="flex-end" flexGrow={1}>
						<Button color="inherit" onClick={() => handleNavigation("/")}>
							Home
						</Button>
						<Button
							color="inherit"
							onClick={() => handleNavigation("/gallery")}
						>
							Gallery
						</Button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
