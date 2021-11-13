import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const Review = () => {
	const { user } = useAuth();
	const [userReview, setUserReview] = useState({
		name: "",
		email: "",
		des: "",
		title: "",
		rating: "",
	});

	const handleChange = (e) => {
		const type = e.target.name;
		const newReview = { ...userReview };
		newReview[type] = e.target.value;
		setUserReview(newReview);
	};

	const addReview = (e) => {
		e.preventDefault();
		const newReview = { ...userReview };
		newReview.name = user.name;
		newReview.email = user.email;
		setUserReview(newReview);

		axios
			.post("https://salty-chamber-27188.herokuapp.com/reviews", newReview)
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
	};

	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				Please give us a review
			</Typography>
			<Form onSubmit={addReview}>
				<TextField
					label='Name'
					id='outlined-size-small'
					defaultValue={user?.name}
					size='small'
					name='name'
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					label='Email'
					id='outlined-size-small'
					defaultValue={user?.email}
					size='small'
					name='email'
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					required
					id='outlined-multiline-static'
					label='Review Title'
					multiline
					name='title'
					onBlur={handleChange}
				/>
				<TextField
					required
					id='outlined-multiline-static'
					label='Your review'
					multiline
					name='des'
					onBlur={handleChange}
				/>
				<TextField
					required
					label='Rating (0-5)'
					id='outlined-size-small'
					size='small'
					name='rating'
					onBlur={handleChange}
				/>

				<Button variant='contained' type='submit'>
					Submit Review
				</Button>
			</Form>
		</Wrapper>
	);
};

export default Review;
