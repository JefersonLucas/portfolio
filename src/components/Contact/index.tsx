import React, { useContext } from 'react'

import * as S from './styles'

import { UserContext } from 'contexts/User/UserContext'

const Contact: React.FC = () => {
	const data = useContext(UserContext)
	return (
		<S.Footer id="contato">
			<S.Container>
				<S.Description>
					Estou disponível para novos projetos no momento. Entre em contato
					comigo e marcamos uma conversa.
				</S.Description>
				<S.Contacts>
					<S.Email>
						<S.Link
							href={`mailto:${data.user?.basic_info.email}`}
							title="E-mail Jeferson Lucas"
							target="_blank"
						>
							jeferson.luckas@gmail.com
						</S.Link>
					</S.Email>
					<S.Whatsapp>
						<S.Link
							href={data.user?.basic_info.social_networks.whatsapp}
							title="Whatsapp Jeferson Lucas"
							target="_blank"
						>
							+55 (61) 9 9845-3785
						</S.Link>
					</S.Whatsapp>
					<S.Linkedin>
						<S.Link
							href={data.user?.basic_info.social_networks.linkedin}
							title="Linkedin Jeferson Lucas"
							target="_blank"
						>
							Jeferson Lucas
						</S.Link>
					</S.Linkedin>
				</S.Contacts>
				<S.Copy>2022 © Jeff. Alguns direitos reservados.</S.Copy>
			</S.Container>
		</S.Footer>
	)
}

export default Contact
