import React from "react";
import { Wrapper } from "./SectionBanner.styles";
import banner from "../../Images/banner.jpg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SectionBanner = ({ title }) => {
	return (
		<Wrapper bg={banner}>
			<div className='content'>
				<Typography variant='h3' gutterBottom component='h1'>
					{title}
				</Typography>
				<Typography variant='subtitle2' gutterBottom component='p'>
					<Link to='/'>Home</Link>
				</Typography>
			</div>
		</Wrapper>
	);
};

export default SectionBanner;
