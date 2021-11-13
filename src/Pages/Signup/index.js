import React, { useEffect } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import { SectionWrapper, SectionTitle } from "../../global.styles";
import { Wrapper, Form } from "../Login/Login.styles";
import { Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useScrollTop from "../../Hooks/useScrollTop";
import { useHistory, useLocation } from "react-router-dom";

const Signup = () => {
	const { userInfo, setUserInfo, register, isLoggedin } = useAuth();
	const history = useHistory();
	const location = useLocation();

	const { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		isLoggedin && history.replace(from);
	}, [isLoggedin, from, history]);

	useScrollTop();

	const handleChange = (e) => {
		const type = e.target.name;
		const newInfo = { ...userInfo };
		newInfo[type] = e.target.value;
		setUserInfo(newInfo);
	};

	return (
		<>
			<Navbar />
			<SectionWrapper as={Wrapper}>
				<SectionTitle>Create a new account</SectionTitle>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						register();
					}}
					className='d-flex f-center'>
					<TextField
						required
						id='outlined-required'
						label='Enter your name'
						type='text'
						size='small'
						name='name'
						defaultValue={userInfo.name}
						onBlur={handleChange}
					/>
					<TextField
						required
						id='outlined-required'
						label='Email'
						type='email'
						size='small'
						name='email'
						defaultValue={userInfo.email}
						onBlur={handleChange}
					/>
					<TextField
						required
						id='outlined-password-input'
						label='Password'
						type='password'
						size='small'
						name='password'
						defaultValue={userInfo.password}
						onBlur={handleChange}
					/>
					<Button variant='contained' type='submit'>
						Signup
					</Button>

					<Typography variant='subtitle1' gutterBottom component='div'>
						Already have an account? <Link to='/signup'>Log in</Link>
					</Typography>
				</Form>
			</SectionWrapper>
			<Footer />
		</>
	);
};

export default Signup;
