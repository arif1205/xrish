import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	.text,
	.img {
		max-width: 50%;
		align-self: center;
		font-family: "Jost", sans-serif !important;
		font-weight: normal !important;
	}

	p {
		font-size: 14px !important;
		padding: 15px 0;
		font-weight: normal !important;
		color: #666 !important;
	}
`;
