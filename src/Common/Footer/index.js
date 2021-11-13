import React from "react";
import { SectionWrapper } from "../../global.styles";
import { Flex } from "./Footer.styles";
import Divider from "@mui/material/Divider";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<SectionWrapper>
			<Flex>
				<div className='left'>
					<img src={logo} alt='logo' />
				</div>
				<div className='right'>
					<ul className='d-flex flex-center f-gap-20'>
						<li>
							<Link to='/'>privacy</Link>
						</li>
						<li>
							<Link to='/'>Terms</Link>
						</li>
						<li>
							<Link to='/'>promo and cc</Link>
						</li>
					</ul>
				</div>
			</Flex>
			<Divider />
			<Flex className='f-center'>
				<p>Copyright © 2021. All Right Reserved</p>
			</Flex>
		</SectionWrapper>
	);
};

export default Footer;
