import styled from 'styled-components'

export const Container = styled.div`
	p::selection,
	strong::selection {
		color: ${(props) => props.theme.colors.white};
		background: ${({ theme }) => theme.colors.v1};
	}
`
