import React from 'react'

import * as S from './styles'

import { useTheme } from 'styled-components'
import Subtitle from 'components/Subtitle'

const About: React.FC = () => {
	const theme = useTheme()

	return (
		<S.Container aria-label="Sobre" id="sobre">
			<Subtitle color={theme.colors.g3}>Sobre</Subtitle>

			<S.Content>
				<S.Description>
					Desenvolvedor graduado em{' '}
					<strong>Análises e Desenvolvimento de Sistemas</strong> e me
					especializando em <strong>MBA em Desenvolvimento Full Stack</strong>.
					Possuo experiência na área com desenvolvimento de aplicações{' '}
					<strong>Front-End</strong> e <strong>Mobile</strong> como{' '}
					<strong>SPA</strong> e <strong>SSG</strong> e aplicações{' '}
					<strong>Back-End</strong> com <strong>Rest API</strong>. Utilizando
					sempre em meus projetos <strong>boas práticas</strong>,{' '}
					<strong>padrões de projetos</strong> e <strong>código limpo</strong>.
					Sou um colaborador calmo, organizado, comunicativo e bastante
					criativo, estou buscando uma empresa para aplicar meus conhecimentos
					técnicos, obter crescimento pessoal e profissional, além, é claro, que
					tenha um ótimo ambiente.
				</S.Description>
			</S.Content>
		</S.Container>
	)
}

export default About
