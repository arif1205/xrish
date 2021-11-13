import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";
import axios from "axios";

const AddProduct = () => {
	const [productInfo, setProductInfo] = useState({
		img: "",
		brand: "",
		model: "",
		des: "",
		price: "",
		year: "",
	});

	const handleChange = (e) => {
		const type = e.target.name;
		const newInfo = { ...productInfo };
		newInfo[type] = e.target.value;
		setProductInfo(newInfo);
	};

	const addNewProduct = (e) => {
		e.preventDefault();
		const cloneInfo = { ...productInfo };

		axios
			.post("https://salty-chamber-27188.herokuapp.com/products", cloneInfo)
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
	};

	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				Please give us a review
			</Typography>
			<Form onSubmit={addNewProduct}>
				<TextField
					label='Brand Name'
					id='outlined-size-small'
					size='small'
					name='brand'
					required
					onBlur={handleChange}
				/>
				<TextField
					label='Model'
					id='outlined-size-small'
					size='small'
					name='model'
					required
					onBlur={handleChange}
				/>
				<TextField
					required
					id='outlined-multiline-static'
					label='Description'
					multiline
					name='des'
					onBlur={handleChange}
				/>
				<TextField
					required
					id='outlined-multiline-static'
					label='Img URL'
					multiline
					name='img'
					onBlur={handleChange}
				/>
				<TextField
					required
					label='Price'
					id='outlined-size-small'
					size='small'
					name='price'
					onBlur={handleChange}
				/>
				<TextField
					required
					label='Launching Year'
					id='outlined-size-small'
					size='small'
					name='year'
					onBlur={handleChange}
				/>

				<Button variant='contained' type='submit'>
					Add a New Products
				</Button>
			</Form>
		</Wrapper>
	);
};

export default AddProduct;
