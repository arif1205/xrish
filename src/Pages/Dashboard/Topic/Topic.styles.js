import styled from "styled-components";

export const Wrapper = styled.div`
	text-align: center;
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
