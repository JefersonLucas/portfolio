import styled from 'styled-components'

export const ExperienceContainer = styled.div`
	background: ${({ theme }) => theme.colors.g1};
`

export const Container = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 100px;

	max-width: 1200px;
	height: 100vh;
	padding: 40px 20px;
	margin: 0 auto;
`

export const Content = styled.div``

export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 1.33;
	margin-bottom: 60px;
	color: ${({ theme }) => theme.colors.g10};

	> strong {
		color: ${({ theme }) => theme.colors.black};
	}
`

export const Company = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px 20px;

	padding: 20px;
	margin-bottom: 20px;

	border-radius: 4px;
	background: ${({ theme }) => theme.colors.g2};

	position: relative;

	&::before {
		content: '';
		display: block;
		width: 4px;
		height: 20px;
		background: linear-gradient(#b629f8, #365599);

		position: absolute;
		top: 20px;
		left: -3px;
	}
`

export const CompanyYear = styled.span`
	position: absolute;
	top: 22px;
	left: -60px;

	font-size: 0.875rem;
	text-align: right;
	user-select: none;

	width: 50px;

	color: ${({ theme }) => theme.colors.g10};
`

export const CompanyTitle = styled.h3`
	font-size: 1.125rem;
	line-height: 1.1;
	font-weight: bold;
`

export const CompanyText = styled.p`
	font-size: 0.875rem;
	line-height: 1.4;
	color: ${({ theme }) => theme.colors.g10};
`

export const CompanySkills = styled.ul`
	display: flex;
	align-content: start;
	flex-wrap: wrap;
	gap: 10px;

	user-select: none;
`

export const SkillItem = styled.li`
	font-size: 0.875rem;
	line-height: 1.4;

	border-radius: 4px;
	background: ${({ theme }) => theme.colors.white};

	padding: 5px 10px;
`
