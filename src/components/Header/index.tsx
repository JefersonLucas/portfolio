import React from 'react'

import * as S from './styles'

const Header: React.FC = () => {
	return (
		<S.Container>
			<S.Logo src="./logo.svg" alt="Logo" />

			<S.Nav>
				<S.Menu>
					<S.Item>
						<S.Link href="#sobre">Sobre</S.Link>
					</S.Item>
					<S.Item>
						<S.Link href="#experiencia">Experiência</S.Link>
					</S.Item>
					<S.Item>
						<S.Link href="#formacao">Formação</S.Link>
					</S.Item>
					<S.Item>
						<S.Link href="#contato">Contato</S.Link>
					</S.Item>
				</S.Menu>
			</S.Nav>
		</S.Container>
	)
}

export default Header
