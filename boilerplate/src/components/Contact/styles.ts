import styled from 'styled-components'

export const Footer = styled.footer`
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 100px;

	max-width: 1200px;
	height: fit-content;
	padding: 120px 20px 60px;
	margin: 0 auto;
`

export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 1.33;
	color: ${({ theme }) => theme.colors.g4};
`

export const Contacts = styled.ul`
	> li {
		font-weight: bold;
		margin-bottom: 30px;
	}
`
export const Link = styled.a`
	text-decoration: none;

	color: ${({ theme }) => theme.colors.white};

	position: relative;

	&::before {
		content: '';
		display: block;
		width: 32px;
		height: 32px;

		position: absolute;
		left: -46px;
		top: -6px;
	}
`
export const Email = styled.li`
	a::before {
		background: url('./envelope.svg') no-repeat center;
	}
`

export const Whatsapp = styled.li`
	a::before {
		background: url('./whatsapp.svg') no-repeat center;
	}
`

export const Linkedin = styled.li`
	a::before {
		background: url('./linkedin.svg') no-repeat center;
	}
`

export const Copy = styled.p`
	color: ${({ theme }) => theme.colors.g7};
	text-align: center;
	grid-column: 1 / -1;
`
