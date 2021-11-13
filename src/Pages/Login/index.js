import React, { useEffect } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import { SectionWrapper, SectionTitle } from "../../global.styles";
import { Wrapper, Form } from "./Login.styles";
import { Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useScrollTop from "../../Hooks/useScrollTop";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const { userInfo, setUserInfo, login, isLoggedin } = useAuth();
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

	useScrollTop();
	return (
		<>
			<Navbar />
			<SectionWrapper as={Wrapper}>
				<SectionTitle>Please Login to your account</SectionTitle>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						login();
					}}
					className='d-flex f-center'>
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
						Login
					</Button>

					<Typography variant='subtitle1' gutterBottom component='div'>
						Don't have an account?{" "}
						<Link to='/signup'>Create a new account.</Link>
					</Typography>
				</Form>
			</SectionWrapper>
			<Footer />
		</>
	);
};

export default Login;
