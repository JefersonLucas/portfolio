import React from 'react'

import { Container } from './styles'
import { SubtitleProps } from './types'

const Subtitle: React.FC<SubtitleProps> = ({ children, color }) => {
	return <Container color={color}>{children}</Container>
}

export default Subtitle
