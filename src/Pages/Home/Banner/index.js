import React from "react";
import Typography from "@mui/material/Typography";
import { BannerText, Container } from "./Banner.styles";
import banner from "../../../Images/banner.jpg";
import Button from "@mui/material/Button";
import { WhiteButton } from "../../../global.styles";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<Container bg={banner}>
			<BannerText>
				<Typography variant='subtitle2' gutterBottom component='p'>
					TIMELESS AND ELEGANT
				</Typography>
				<Typography variant='h2' gutterBottom component='h1'>
					BEST SELLER
				</Typography>
				<Typography variant='subtitle1' gutterBottom component='p'>
					Complete your everyday look with a classic leather strap watch.
				</Typography>
				<Link to='/explore'>
					<Button variant='contained' component={WhiteButton}>
						SHOP NOW
					</Button>
				</Link>
			</BannerText>
		</Container>
	);
};

export default Banner;
