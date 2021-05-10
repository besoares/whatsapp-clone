import React, { useEffect, useRef } from "react";
import { ChatContent } from "./ChatContent";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faSearch,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";
import whatsAppImage from "../assets/images/whatsapp-phone.jpg";

const MainContainerChat = () => {
	const selectedContact = useSelector(
		(state) => state.contactsStore.selectedContact
	);
	const contactDescription = useRef(null);

	useEffect(() => {
		if (selectedContact) {
			const interval = setInterval(() => {
				if (contactDescription) {
					console.log("vou matar", selectedContact.name);
				}

				clearInterval(interval);
			}, 2000);
		}
	}, [selectedContact]);

	const headerContact = () => {
		return (
			<>
				<div className="Grow">
					<div>
						<div className="MainContainer__Chat--Avatar">
							{selectedContact.photo && (
								<div className="MainContainer__Chat--AvatarImage"></div>
							)}
							{!selectedContact.photo && <FontAwesomeIcon icon={faUser} />}
						</div>
					</div>
					<div className="MlSm FlexColumn ItemsStart">
						{selectedContact.name}
						<small className="ContactDescription ZoomOutSm MtXs ColorTitle">
							clique aqui para dados do contato
						</small>
					</div>
				</div>
				<div>
					<ButtonIcon icon={faSearch} />
				</div>
				<div>
					<ButtonIcon icon={faEllipsisV} />
				</div>
			</>
		);
	};

	return (
		<div className="MainContainer__Chat">
			<header>{selectedContact && headerContact()}</header>
			<div className="MainContainer__Chat--Content Grow">
				<MainContainerChatConversation />
			</div>
		</div>
	);
};

const MainContainerChatConversation = () => {
	const selectedContact = useSelector(
		(state) => state.contactsStore.selectedContact
	);

	const containerImage = (
		<div className="MainContainer__Chat--Image Grow">
			<div>
				<img src={whatsAppImage} />
				<h1>Mantenha seu celular conectado</h1>
				<div className="TextInfo">
					O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
					Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
				</div>
			</div>
		</div>
	);

	return (
		<div className="MainContainer__Chat--Conversation Grow">
			{!selectedContact && containerImage}
			{selectedContact && <ChatContent />}
		</div>
	);
};

export default MainContainerChat;
