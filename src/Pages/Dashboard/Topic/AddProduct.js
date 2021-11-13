import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Wrapper, Form } from "./Topic.styles";
import axios from "axios";
import Alerts from "../../../Common/Alert";

const AddProduct = () => {
	const [alert, setAlert] = useState(false);
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
			.then((res) => {
				if (res.data.insertedId) {
					setAlert(true);
					setProductInfo({
						img: "",
						brand: "",
						model: "",
						des: "",
						price: "",
						year: "",
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
			<Form onSubmit={addNewProduct}>
				<TextField
					label='Brand Name'
					id='outlined-size-small'
					size='small'
					name='brand'
					required
					value={productInfo.brand}
					onChange={handleChange}
				/>
				<TextField
					label='Model'
					id='outlined-size-small'
					size='small'
					name='model'
					required
					value={productInfo.model}
					onChange={handleChange}
				/>
				<TextField
					required
					value={productInfo.des}
					id='outlined-multiline-static'
					label='Description'
					multiline
					name='des'
					onChange={handleChange}
				/>
				<TextField
					required
					value={productInfo.img}
					id='outlined-multiline-static'
					label='Img URL'
					multiline
					name='img'
					onChange={handleChange}
				/>
				<TextField
					required
					value={productInfo.price}
					label='Price'
					id='outlined-size-small'
					size='small'
					name='price'
					onChange={handleChange}
				/>
				<TextField
					required
					value={productInfo.year}
					label='Launching Year'
					id='outlined-size-small'
					size='small'
					name='year'
					onChange={handleChange}
				/>

				<Button variant='contained' type='submit'>
					Add a New Products
				</Button>
			</Form>
			{alert && <Alerts text='Product added Successfully' />}
		</Wrapper>
	);
};

export default AddProduct;
