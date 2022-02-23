import styled from 'styled-components'

import { SubtitleProps } from './types'

export const Container = styled.h2<SubtitleProps>`
	color: ${(props) => props.color};
	font-size: 8rem;
	line-height: 1;
	text-transform: uppercase;
	word-break: break-all;
	max-width: 4ch;
`
