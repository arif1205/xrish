import styled from "styled-components";

export const Item = styled.div`
	cursor: pointer;
	font-family: "Jost", sans-serif;
	transition: all 0.3s;

	div.content {
		text-align: center;
		background: #fff;
		color: #000;
	}

	div.img {
		img {
			width: 250px;
			display: block;
			margin: auto;
			transition: all 0.3s;
		}
	}

	h6 {
		font-size: 18px;
		font-weight: normal;
	}

	p {
		color: #555;
	}

	p:last-child {
		color: #000 !important;
	}

	&:hover img {
		transform: scale(1.1);
	}
`;
