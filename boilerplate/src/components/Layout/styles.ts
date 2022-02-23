import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(5, auto);

	p::selection {
		color: ${(props) => props.theme.colors.white};
		background: ${({ theme }) => theme.colors.v1};
	}
`
