import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";
import axios from "axios";
import Alerts from "../../../Common/Alert";

const MakeAdmin = () => {
	const [alert, setAlert] = useState(false);
	const [email, setEmail] = useState("");

	const updateRole = (e) => {
		e.preventDefault();

		axios
			.put(`https://salty-chamber-27188.herokuapp.com/users?email=${email}`)
			.then((res) => {
				if (res.data.modifiedCount) {
					setEmail("");
					setAlert(true);
					setTimeout(() => {
						setAlert(false);
					}, 3000);
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				Make someone Admin
			</Typography>
			<Form onSubmit={updateRole}>
				<TextField
					label='Email'
					id='outlined-size-small'
					size='small'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button variant='contained' type='submit'>
					Make Admin
				</Button>
			</Form>
			{alert && <Alerts text='New Admin Added' />}
		</Wrapper>
	);
};

export default MakeAdmin;
