export interface User {
	basic_info: BasicInfomation
	experiences: Experiences[]
	formation: Formation
}

type BasicInfomation = {
	name: string
	title: string
	occupation: string
	email: string
	telephone: string
	social_networks: SocialNetworks
}

type SocialNetworks = {
	linkedin: string
	facebook: string
	instagram: string
}

type Experiences = {
	id: number
	year: number
	company: string
	occupation: string
	description: string
	keywords: string[]
}

type Formation = {
	academic_experiences: AcademicExperiences[]
	intensive_courses: IntensiveCourses[]
	languages: Languages[]
}

type AcademicExperiences = {
	id: number
	institution: string
	course: string
	type: string
}

type IntensiveCourses = {
	id: number
	course: string
	hours: number
}

type Languages = {
	id: number
	language: string
	level: string
}
