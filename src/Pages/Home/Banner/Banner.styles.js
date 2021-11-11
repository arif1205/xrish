import styled from "styled-components";

export const Container = styled.header`
	min-height: 100vh;
	width: 100%;
	background: url(${(props) => props.bg});
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
`;
