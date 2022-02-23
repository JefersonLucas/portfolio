import styled from 'styled-components'

export const Container = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 100px;

	max-width: 1200px;
	height: 100vh;
	padding: 40px 20px;
	margin: 0 auto;
`

export const Content = styled.div``

export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 1.33;
	margin-bottom: 60px;
	color: ${({ theme }) => theme.colors.g10};

	> strong {
		color: ${({ theme }) => theme.colors.black};
	}
`
