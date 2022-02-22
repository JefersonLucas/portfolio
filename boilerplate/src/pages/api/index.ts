import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from 'interfaces/User/types'

export default function handler(_: NextApiRequest, res: NextApiResponse<User>) {
	res.status(200).json({
		basic_info: {
			name: 'Jeferson Lucas',
			title: 'Desenvolvedor Web Full Stack & Mobile',
			occupation: 'Desenvolvedor Full Stack',
			email: 'jeferson.luckas@gmail.com',
			telephone: '+55 (61) 9 9845-3785',
			social_networks: {
				linkedin: 'https://www.linkedin.com/in/jeferson-lucas/',
				facebook: 'https://www.facebook.com/profile.php?id=100004317732004',
				instagram: 'https://www.instagram.com/jeferson.luckas/'
			}
		},
		experiences: [
			{
				id: 1,
				year: 2021,
				company: '3e Consulting',
				occupation: 'Desenvolvedor Full Stack Jr.',
				description:
					'Ajudei no desenvolvimento nos projetos web e mobile utilizando TypeScript, Next, React Native, Docker, GraphQL e Jest.',
				keywords: ['TypeScript', 'Next.js', 'React', 'React Native', 'GraphQL']
			}
		],
		formation: [
			{
				id: 1,
				description:
					'Minha mais recente experiência acadêmica foi o MBA em Desenvolvimento Full Stack que estou fazendo pelo IGTI. Além disso me mantenho sempre atualizado com cursos intensivos online voltados para o desenvolvimento, arquitetura de código e UI.',
				academic_experiences: [
					{
						id: 1,
						institution: 'IGTI',
						course: 'Desenvolvimento Full Stack',
						type: 'MBA/Especialização'
					},
					{
						id: 2,
						institution: 'UNOPAR',
						course: 'Análises e Desenvolvimento de Sistemas',
						type: 'Tecnólogo'
					}
				],
				intensive_courses: [
					{ id: 1, course: 'Desenvolvedor Node.js', hours: 148 },
					{ id: 2, course: 'Desenvolvedor React', hours: 148 },
					{
						id: 3,
						course: 'Padrões de Projeto GoF e Princípios SOLID',
						hours: 6.5
					}
				],
				languages: [
					{ id: 1, language: 'inglês', level: 'básico' },
					{ id: 2, language: 'espanhol', level: 'básico' }
				]
			}
		]
	})
}
