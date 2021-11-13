import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid, SectionTitle, SectionWrapper } from "../../../global.styles";
import bg from "../../../Images/testimonial-bg.jpg";
import { Item, Wrapper } from "./Reviews.styles";
import Typography from "@mui/material/Typography";
import Rating from "react-rating";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		axios
			.get("https://salty-chamber-27188.herokuapp.com/reviews")
			.then((res) => {
				setReviews(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Wrapper bg={bg}>
			<SectionWrapper>
				<SectionTitle>Happy Customers</SectionTitle>
				<Grid>
					{reviews.map((review) => (
						<Item key={review._id}>
							<div className='review-text'>
								<Typography variant='h5' gutterBottom component='h5'>
									<i>"{review.title}"</i>
								</Typography>
								<Typography variant='subtitle2' gutterBottom component='p'>
									{review.des}
								</Typography>
								<Typography
									variant='subtitle2'
									gutterBottom
									component='p'
									className='rating'>
									<Rating
										emptySymbol='fa fa-star-o fa-2x'
										fullSymbol='fa fa-star fa-2x'
										start={0}
										stop={5}
										initialRating={review.rating}
										readonly
									/>
								</Typography>
								<Typography variant='h6' gutterBottom component='h6'>
									{review.name}
								</Typography>
							</div>
						</Item>
					))}
				</Grid>
			</SectionWrapper>
		</Wrapper>
	);
};

export default Reviews;
