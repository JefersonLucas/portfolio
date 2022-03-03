import React from 'react'

import * as S from './styles'

const Main: React.FC = () => {
	return (
		<S.Container>
			<S.Perfil src="./profile.jpg" alt="Perfil" />
			<S.Title>
				Desenvolvedor <br />
				Full Stack & <br />
				Mobile
			</S.Title>
		</S.Container>
	)
}

export default Main
