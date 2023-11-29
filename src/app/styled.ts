import styled from 'styled-components';

export const App = styled.div`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primaryText};
	font-family: ${({ theme }) => theme.primaryFontFamily};

	a {
		color: ${({ theme }) => theme.elementColors.anchor.color};

		&:visited {
			color: ${({ theme }) => theme.elementColors.anchor.color};
		}
	}
`;
