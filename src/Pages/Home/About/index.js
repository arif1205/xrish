import React from "react";
import Typography from "@mui/material/Typography";
import { SectionWrapper } from "../../../global.styles";
import { Flex } from "./About.styles";
import about from "../../../Images/about.jpg";
import Button from "@mui/material/Button";
import { WhiteButton } from "../../../global.styles";

const About = () => {
	return (
		<SectionWrapper>
			<Flex>
				<div className='text'>
					<Typography variant='h4' gutterBottom component='h4'>
						UK PREMIER STORE <br /> FOR WRIST WATCHES
					</Typography>
					<Typography variant='subtitle2' gutterBottom component='p'>
						WRISH is the most recognizable luxury watch brand. The basis for
						WRISH's success is its extremely high product quality extending over
						the many years of its existence. WRISH watches show time accurately
						and are robust, sturdy and reliable. WRISH watches show time
						accurately and are robust, sturdy and reliable. Maintaining
						consistently high quality with estimated annual production numbers
						of about three-quarters of a million pieces is an art unto itself.
					</Typography>
					<Button variant='contained' component={WhiteButton}>
						ABOUT US
					</Button>
				</div>
				<div className='img'>
					<img src={about} alt='About banner' />
				</div>
			</Flex>
		</SectionWrapper>
	);
};

export default About;
