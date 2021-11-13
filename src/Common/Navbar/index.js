import React from "react";
import { Menu, Container } from "./Navbar.styles";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
	const { user, logout } = useAuth();

	return (
		<Container component='nav' maxWidth='lg'>
			<Menu className='d-flex f-center'>
				<div className='left-side nav d-flex f-gap-20'>
					<div className='logo'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='nav-links'>
						<ul className='d-flex f-center f-gap-20'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/explore'>Explore</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='right-side dashboard'>
					{user.email ? (
						<div className='d-flex f-gap-10'>
							<Link to='/dashboard'>Dashboard</Link>
							<Typography variant='subtitle1' gutterBottom component='div'>
								{user.name}
							</Typography>
							<Button variant='contained' type='submit' onClick={logout}>
								Log out
							</Button>
						</div>
					) : (
						<div className='d-flex f-gap-10'>
							<Link to='/login'>Login</Link>
							<span> / </span>
							<Link to='/signup'>Signup</Link>
						</div>
					)}
				</div>
			</Menu>
		</Container>
	);
};

export default Navbar;
