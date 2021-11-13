import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 70px;
	min-height: 600px;
`;

export const Form = styled.form`
	flex-direction: column;
	width: 350px;
	margin: auto;
	gap: 30px;

	& > div {
		width: 100% !important;
	}
`;
