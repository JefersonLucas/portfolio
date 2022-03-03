import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	max-width: 1200px;
	padding: 40px 20px;
	margin: 0 auto;
`

export const Logo = styled.img``

export const Nav = styled.nav``

export const Menu = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`

export const Item = styled.li``

export const Link = styled.a`
	display: block;

	font-size: 1.125rem;
	line-height: 1.3rem;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.black};

	padding: 10px 20px;

	&:hover {
		color: ${({ theme }) => theme.colors.v3};
	}

	&::after {
		content: '';
		display: block;
		height: 2px;
		width: 0%;
		margin-top: 8px;
		transition: 0.3s;
		background: ${({ theme }) => theme.colors.v3};
	}

	&:hover:after {
		width: 100%;
	}
`
