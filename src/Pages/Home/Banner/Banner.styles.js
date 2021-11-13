import styled from "styled-components";

export const Container = styled.header`
	min-height: 100vh;
	width: 100%;
	background: url(${(props) => props.bg});
	background-position: center center;
	background-size: cover;
	position: relative;
`;

export const BannerText = styled.div`
	position: absolute;
	bottom: 150px;
	left: 150px;
	color: #fff !important;
	text-transform: uppercase;

	h1 {
		margin: 5px 0;
	}

	@media screen and (max-width: 767px) {
		bottom: 100px;
		left: 100px;
		padding-right: 40px;

		h1 {
			font-size: 38px !important;
		}
	}
	@media screen and (max-width: 575px) {
		bottom: 80px;
		left: 40px;

		h1 {
			font-size: 38px !important;
		}
	}
`;
