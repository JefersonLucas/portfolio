import React, { useContext } from 'react'

import * as S from './styles'

import Section from 'components/Section'
import Subtitle from 'components/Subtitle'
import Description from 'components/Description'

import { UserContext } from 'contexts/User/UserContext'
import { useTheme } from 'styled-components'

const Formation: React.FC = () => {
	const theme = useTheme()
	const data = useContext(UserContext)

	return (
		<S.FormationContainer>
			<Section id="formacao" aria_label="Formação">
				<Subtitle color={theme.colors.black}>Formação</Subtitle>

				<S.Content>
					<Description
						color={theme.colors.g6}
						strong_color={theme.colors.white}
					>
						Minha mais recente experiência acadêmica foi o{' '}
						<strong>MBA em Desenvolvimento Full Stack</strong> que estou fazendo
						pelo <strong>IGTI</strong>. Além disso me mantenho sempre atualizado
						com cursos intensivos online voltados para o{' '}
						<strong>desenvolvimento</strong>,{' '}
						<strong>arquitetura de código</strong> e <strong>UI</strong>.
					</Description>

					<S.CollegeList>
						{data.user?.formation.academic_experiences.map(
							({ id, type, course, institution }) => (
								<S.College key={id}>
									<S.CollegeType>{type}</S.CollegeType>
									<S.CollegeCourse>{course}</S.CollegeCourse>
									<S.CollegeInstitution>{institution}</S.CollegeInstitution>
								</S.College>
							)
						)}
					</S.CollegeList>

					<S.ExtraTraining>
						<S.Courses>
							<S.Title>Cursos Intensivos</S.Title>
							<S.List>
								{data.user?.formation.intensive_courses.map(
									({ id, course, hours }) => (
										<S.Item key={id}>
											{course} <S.Destak>{hours}h</S.Destak>
										</S.Item>
									)
								)}
							</S.List>
						</S.Courses>
						<S.Languages>
							<S.Title>Idiomas</S.Title>
							<S.List>
								{data.user?.formation.languages.map(
									({ id, language, level }) => (
										<S.Item key={id}>
											{language} / <S.Destak>{level}</S.Destak>
										</S.Item>
									)
								)}
							</S.List>
						</S.Languages>
					</S.ExtraTraining>
				</S.Content>
			</Section>
		</S.FormationContainer>
	)
}

export default Formation
