import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";

const MakeAdmin = () => {
	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				Make someone Admin
			</Typography>
			<Form onSubmit>
				<TextField
					label='Email'
					id='outlined-size-small'
					size='small'
					name='email'
				/>
				<Button variant='contained' type='submit'>
					Make Admin
				</Button>
			</Form>
		</Wrapper>
	);
};

export default MakeAdmin;
