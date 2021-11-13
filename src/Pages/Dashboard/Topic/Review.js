import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Alerts from "../../../Common/Alert";

const Review = () => {
	const [alert, setAlert] = useState(false);
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
			.then((res) => {
				if (res.data.insertedId) {
					setAlert(true);
					setUserReview({
						name: "",
						email: "",
						des: "",
						title: "",
						rating: "",
					});
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
					value={userReview.title}
					onChange={handleChange}
				/>
				<TextField
					required
					id='outlined-multiline-static'
					label='Your review'
					multiline
					name='des'
					value={userReview.des}
					onChange={handleChange}
				/>
				<TextField
					required
					label='Rating (0-5)'
					id='outlined-size-small'
					size='small'
					name='rating'
					value={userReview.rating}
					onChange={handleChange}
				/>

				<Button variant='contained' type='submit'>
					Submit Review
				</Button>
			</Form>
			{alert && <Alerts text='Review placed Successfully' />}
		</Wrapper>
	);
};

export default Review;
