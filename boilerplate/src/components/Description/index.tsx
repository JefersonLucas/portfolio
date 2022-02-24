import React from 'react'

import { Container } from './styles'
import { DescriptionProps } from './types'

const Description: React.FC<DescriptionProps> = ({
	color,
	strong_color,
	children
}) => {
	return (
		<Container color={color} strong_color={strong_color}>
			{children}
		</Container>
	)
}

export default Description
