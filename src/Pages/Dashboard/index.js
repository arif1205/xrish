import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Topic from "./Topic";
import axios from "axios";

const drawerWidth = 240;

const Dashboard = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const { logout, user } = useAuth();
	let { path, url } = useRouteMatch();
	const [role, setRole] = useState("customer");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	useEffect(() => {
		axios
			.get(
				`https://salty-chamber-27188.herokuapp.com/users?email=${user.email}`
			)
			.then((res) => {
				setRole(res.data[0].role);
			})
			.catch((e) => console.log(e));
	}, [user.email]);

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			{role === "customer" && (
				<List>
					<ListItem button component={Link} to={`${url}/pay`}>
						<ListItemText primary={"Pay"} />
					</ListItem>
					<ListItem button component={Link} to={`${url}/myorders`}>
						<ListItemText primary={"My Orders"} />
					</ListItem>
					<ListItem button component={Link} to={`${url}/review`}>
						<ListItemText primary={"Review"} />
					</ListItem>
					<ListItem button component={Link} to='/'>
						<ListItemText primary={"Home"} />
					</ListItem>
					<ListItem button onClick={logout}>
						<ListItemText primary={"Logout"} />
					</ListItem>
				</List>
			)}
			{role === "admin" && (
				<List>
					<ListItem button component={Link} to={`${url}/manageallorders`}>
						<ListItemText primary={"Manage all Orders"} />
					</ListItem>
					<ListItem button component={Link} to={`${url}/addproduct`}>
						<ListItemText primary={"Add a Product"} />
					</ListItem>
					<ListItem button component={Link} to={`${url}/makeadmin`}>
						<ListItemText primary={"Make admin"} />
					</ListItem>
					<ListItem button component={Link} to={`${url}/manageproduct`}>
						<ListItemText primary={"Manage Product"} />
					</ListItem>
					<ListItem button component={Link} to='/'>
						<ListItemText primary={"Home"} />
					</ListItem>
					<ListItem button onClick={logout}>
						<ListItemText primary={"Logout"} />
					</ListItem>
				</List>
			)}
			<Divider />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position='fixed'
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
					}}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}>
							<i className='fa fa-bars'></i>
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Box
					component='nav'
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label='mailbox folders'>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Drawer
						container={container}
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
					<Drawer
						variant='permanent'
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
						open>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}>
					<Toolbar />
					<Switch>
						<Route exact path={path}>
							<Typography variant='h3'>Welcome to your Dashboard</Typography>
						</Route>
						<Route path={`${path}/:topicId`}>
							<Topic />
						</Route>
					</Switch>
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;
