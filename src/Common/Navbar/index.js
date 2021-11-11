import React from "react";
import { Menu, Container } from "./Navbar.styles";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
								<Link to='/'>Explore</Link>
							</li>
							<li>
								<Link to='/'>About us</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='right-side dashboard'>
					<div className='d-flex f-gap-10'>
						<Link to='/'>Login</Link>
						<span> / </span>
						<Link to='/'>Signup</Link>
					</div>
				</div>
			</Menu>
		</Container>
	);
};

export default Navbar;
