import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import { SectionWrapper, SectionTitle } from "../../global.styles";
import { Wrapper, Flex, Form } from "./Product.styles";
import useScrollTop from "../../Hooks/useScrollTop";
import { Button, TextField, Typography } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const { user } = useAuth();
	const [orderInfo, setOrderInfo] = useState({
		name: "",
		email: "",
		price: "",
		address: "",
		phone: "",
		productId: "",
		productName: "",
		productModel: "",
	});

	useEffect(() => {
		axios
			.get(`https://salty-chamber-27188.herokuapp.com/products/${id}`)
			.then((res) => {
				setProduct(res.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	useScrollTop();

	const updatePlaceOrderInfo = (e) => {
		const type = e.target.name;
		const newOrderInfo = { ...orderInfo };
		newOrderInfo[type] = e.target.value;
		setOrderInfo(newOrderInfo);
	};

	const placeOrder = (e) => {
		e.preventDefault();

		const newOrderInfo = { ...orderInfo };
		newOrderInfo.name = user?.name;
		newOrderInfo.email = user?.email;
		newOrderInfo.price = product?.price;
		newOrderInfo.productId = product?._id;
		newOrderInfo.productName = product?.brand;
		newOrderInfo.productModel = product?.model;
		newOrderInfo.status = "pending";

		setOrderInfo(newOrderInfo);

		axios
			.post("https://salty-chamber-27188.herokuapp.com/orders", newOrderInfo)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<>
			<Navbar />
			<SectionWrapper as={Wrapper}>
				<SectionTitle>
					Please, Fill the fields to confirm your order
				</SectionTitle>
				<Flex>
					<div className='product-img'>
						<img src={product?.img} alt='Watch' />
					</div>
					<div className='product-details'>
						<Typography variant='h4' gutterBottom component='h1'>
							{product?.brand}
						</Typography>
						<Typography
							variant='subtitle2'
							gutterBottom
							component='p'
							className='model'>
							{product?.model}
						</Typography>
						<Typography
							variant='subtitle1'
							gutterBottom
							component='p'
							className='des'>
							{product?.des}
						</Typography>

						<Typography variant='h5' gutterBottom component='div' mt={4}>
							Please fill up the following information to confirm the order
						</Typography>
						<Form onSubmit={placeOrder}>
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
								label='Price $'
								id='outlined-size-small'
								defaultValue='$'
								value={product?.price}
								size='small'
								name='price'
								InputProps={{
									readOnly: true,
								}}
							/>
							<TextField
								required
								label='Address'
								id='outlined-size-small'
								size='small'
								name='address'
								onBlur={updatePlaceOrderInfo}
							/>
							<TextField
								required
								label='Phone'
								id='outlined-size-small'
								size='small'
								name='phone'
								onBlur={updatePlaceOrderInfo}
							/>
							<Button variant='contained' type='submit'>
								Place order
							</Button>
						</Form>
					</div>
				</Flex>
			</SectionWrapper>
			<Footer />
		</>
	);
};

export default Product;
