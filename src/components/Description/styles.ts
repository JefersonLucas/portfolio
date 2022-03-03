import styled from 'styled-components'
import { DescriptionProps } from './types'

export const Container = styled.p<DescriptionProps>`
	font-size: 1.5rem;
	line-height: 1.33;
	color: ${(props) => props.color};

	> strong {
		color: ${(props) => props.strong_color};
	}
`
