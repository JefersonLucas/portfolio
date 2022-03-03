import { User } from 'interfaces/User/types'

const user: User = {
	basic_info: {
		name: 'Jeferson Lucas',
		title: 'Desenvolvedor Web Full Stack & Mobile',
		occupation: 'Desenvolvedor Full Stack',
		email: 'jeferson.luckas@gmail.com',
		telephone: '+55 (61) 9 9845-3785',
		social_networks: {
			linkedin: 'https://www.linkedin.com/in/jeferson-lucas/',
			facebook: 'https://www.facebook.com/profile.php?id=100004317732004',
			instagram: 'https://www.instagram.com/jeferson.luckas/',
			whatsapp:
				'https://api.whatsapp.com/send?phone=+556198453785&amp;text=Olá,+tudo+bem?&amp;source=&amp;data=&amp;app_absent='
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
	formation: {
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
}

export default user