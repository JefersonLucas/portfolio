import styled from 'styled-components'

export const FormationContainer = styled.div`
	background: ${({ theme }) => theme.colors.g13};
	color: ${({ theme }) => theme.colors.white};

	h2 {
		max-width: 5ch;
	}
`

export const Content = styled.div`
	p {
		margin-bottom: 20px;
	}
`

export const CollegeList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	margin-bottom: 20px;
`

export const College = styled.li`
	display: flex;
	flex-direction: column;
	flex: 1;

	padding: 20px;

	background: ${({ theme }) => theme.colors.black};
	border-radius: 4px;
`

export const CollegeType = styled.span`
	font-size: 0.875rem;
	text-transform: uppercase;

	margin-bottom: 10px;

	color: ${({ theme }) => theme.colors.g6};
`

export const CollegeCourse = styled.h3`
	flex: 1;

	font-size: 1.125rem;
	line-height: 1.4;

	margin-bottom: 40px;

	position: relative;

	&::before {
		content: '';
		display: block;
		width: 4px;
		height: 20px;
		background: linear-gradient(#b629f8, #365599);
		position: absolute;
		left: -23px;
	}
`

export const CollegeInstitution = styled.span`
	align-items: flex-end;

	font-size: 1.125rem;

	color: ${({ theme }) => theme.colors.g6};
`

export const ExtraTraining = styled.div``

export const Title = styled.h3`
	font-size: 0.875rem;
	line-height: 1.4;
	text-transform: uppercase;

	color: ${({ theme }) => theme.colors.g8};

	margin-bottom: 20px;

	position: relative;

	&::before {
		content: '';
		display: block;
		width: 24px;
		height: 24px;

		position: absolute;
		left: -30px;
		top: -4px;
	}
`

export const List = styled.ul``

export const Item = styled.li`
	font-size: 1.125rem;
	line-height: 1.1;
	margin-bottom: 10px;
`

export const Destak = styled.span`
	color: ${({ theme }) => theme.colors.g7};
`

export const Courses = styled.div`
	margin-bottom: 30px;

	h3::before {
		background: url('./curses.svg') no-repeat center;
	}

	li {
		display: flex;
		justify-content: space-between;
	}
`

export const Languages = styled.div`
	h3::before {
		background: url('./translate.svg') no-repeat center;
	}

	li {
		text-transform: capitalize;
	}
`
