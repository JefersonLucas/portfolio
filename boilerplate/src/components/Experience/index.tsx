import React, { useContext } from 'react'

import * as S from './styles'

import Subtitle from 'components/Subtitle'
import Section from 'components/Section'
import Description from 'components/Description'

import { UserContext } from 'contexts/User/UserContext'
import { useTheme } from 'styled-components'

const Experience: React.FC = () => {
	const data = useContext(UserContext)
	const theme = useTheme()

	return (
		<S.ExperienceContainer>
			<Section aria_label="Experiência" id="experiencia">
				<Subtitle color={theme.colors.g4}>Experiência</Subtitle>

				<S.Content>
					<Description
						color={theme.colors.g10}
						strong_color={theme.colors.black}
					>
						Trabalho com desenvolvimento <strong>web</strong> e{' '}
						<strong>mobile</strong>, desde pequenos projetos passando por
						grandes <strong>aplicações</strong>, <strong>landing pages</strong>,{' '}
						<strong>blogs</strong> e <strong>sistemas</strong>.
					</Description>

					{data.user?.experiences.map(
						({ id, year, company, occupation, description, keywords }) => (
							<S.Company key={id}>
								<S.CompanyYear>{year}</S.CompanyYear>
								<S.CompanyTitle>{company}</S.CompanyTitle>
								<S.CompanyTitle>{occupation}</S.CompanyTitle>
								<S.CompanyText>{description}</S.CompanyText>

								<S.CompanySkills>
									{keywords.map((item) => (
										<S.SkillItem key={item}>{item}</S.SkillItem>
									))}
								</S.CompanySkills>
							</S.Company>
						)
					)}
				</S.Content>
			</Section>
		</S.ExperienceContainer>
	)
}

export default Experience
