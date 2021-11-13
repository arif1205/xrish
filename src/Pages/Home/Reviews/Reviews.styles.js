import styled from "styled-components";

export const Wrapper = styled.div`
	background: url(${(props) => props.bg});
	background-size: cover;
`;

export const Item = styled.div`
	background: url(${(props) => props.bg});
	background-size: cover;

	.review-text {
		text-align: center;
		font-weight: normal !important;
		font-family: "Jost", sans-serif !important;

		h5 {
			font-size: 22px;
		}

		p {
			font-size: 14px;
			color: #555 !important;
			font-weight: 400 !important;
		}

		p.rating {
			color: goldenrod !important;
			font-size: 10px !important;
		}

		h6 {
			font-weight: normal;
			font-size: 16px !important;
			letter-spacing: 1.5px;
			text-transform: uppercase;
		}
	}
`;
