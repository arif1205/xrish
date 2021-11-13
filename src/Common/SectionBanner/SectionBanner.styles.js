import styled from "styled-components";

export const Wrapper = styled.div`
	height: 350px;
	background: url(${(props) => props.bg});
	background-size: cover;
	background-position: center center;
	position: relative;

	.content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		text-align: center;

		a {
			color: #fff !important;
		}
	}
`;
