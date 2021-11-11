import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BannerText, Container } from "./Banner.styles";
import banner from "../../../Images/banner.jpg";
import { WhiteButton } from "../../../global.styles";

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
				<Button variant='contained' component={WhiteButton}>
					SHOP NOW
				</Button>
			</BannerText>
		</Container>
	);
};

export default Banner;
