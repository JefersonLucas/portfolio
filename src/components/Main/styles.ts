import styled from 'styled-components'

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 100px;

	align-items: center;
	justify-items: center;

	max-width: 1200px;
	height: 75vh;
	padding: 40px 20px;
	margin: 0 auto;
`

export const Perfil = styled.img``

export const Title = styled.h1`
	user-select: none;
	font-size: 4.5rem;
	line-height: 1.125;

	position: relative;

	&:before {
		content: '';
		display: block;
		width: 130px;
		height: 100px;
		background: url('./detail.svg') no-repeat center;

		position: absolute;
		top: -15px;
		left: -40px;
		z-index: -1;
	}
`
