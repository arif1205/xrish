import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 70px;
`;

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	.product-img,
	.product-details {
		align-self: center;
		width: 50%;
		gap: 30px;
	}

	.product-img {
		img {
			display: block;
			width: clamp(250px, 50%, 400px);
			margin: auto;
		}
	}

	.product-details {
		text-align: center;

		.model {
			color: #777 !important;
		}

		.des {
			color: #444 !important;
		}
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;

		.product-img,
		.product-details {
			width: 95%;
			gap: 30px;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	gap: 20px;
	flex-direction: column;
	margin-top: 40px;

	& > div {
		width: clamp(250px, 95%, 500px);
		margin: auto;
	}

	button {
		display: block;
		width: clamp(250px, 50%, 400px);
		margin: auto;
	}
`;
