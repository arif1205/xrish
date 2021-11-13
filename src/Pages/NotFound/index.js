import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./NotFound.styles";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Wrapper>
			<div className='content'>
				<h1 className='fourofour'>404</h1>
				<h2 className='opps'>Opps, Page not Found</h2>
				<Link to='/'>
					<Button variant='contained'>Back to home</Button>
				</Link>
			</div>
		</Wrapper>
	);
};

export default NotFound;
