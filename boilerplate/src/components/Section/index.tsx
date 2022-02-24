import React from 'react'

import { Container } from './styles'
import { SectionProps } from './types'

const Section: React.FC<SectionProps> = ({ id, aria_label, children }) => {
	return (
		<Container id={id} aria-label={aria_label}>
			{children}
		</Container>
	)
}

export default Section
