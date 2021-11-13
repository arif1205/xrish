import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, SectionTitle, SectionWrapper } from "../../../global.styles";
import { Item } from "./Products.styles";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("https://salty-chamber-27188.herokuapp.com/products")
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	return (
		<>
			<SectionWrapper>
				<SectionTitle>Top Products</SectionTitle>
				<Grid>
					{products.map((product) => (
						<Item key={product._id}>
							<div className='img'>
								<img src={product.img} alt='watch' />
							</div>
							<div className='content'>
								<Typography variant='h6' gutterBottom component='h6'>
									{product.brand}
								</Typography>
								<Typography variant='subtitle1' gutterBottom component='p'>
									{product.model}
								</Typography>
								<Typography variant='subtitle2' gutterBottom component='p'>
									{product.des}
								</Typography>
								<Typography variant='body2' gutterBottom>
									${product.price}
								</Typography>
								<Link to={`/explore/${product._id}`}>
									<Button variant='contained'>Purchase now</Button>
								</Link>
							</div>
						</Item>
					))}
				</Grid>
			</SectionWrapper>
		</>
	);
};

export default Products;
