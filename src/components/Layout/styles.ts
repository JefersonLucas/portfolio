import styled from 'styled-components'

export const Container = styled.div`
	p::selection,
	strong::selection,
	li::selection,
	span::selection,
	a::selection {
		color: ${(props) => props.theme.colors.white};
		background: ${({ theme }) => theme.colors.v1};
	}
`
