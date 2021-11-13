import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	position: relative;

	div.content {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 95%;
		transform: translate(-50%, -50%);
		text-align: center;

		.fourofour {
			font-size: 150px;
		}

		.opps {
			font-size: 80px;
		}

		button {
			display: block;
			margin-top: 20px !important;
			margin: auto;
		}
	}
`;
