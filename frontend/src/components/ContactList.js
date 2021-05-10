import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContactAction } from "../redux/actions/contactsActions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faCheckDouble,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/ContactList.scss";
import { useTranslation } from "react-i18next";
import { formatDateContacts } from "../helpers/DateTimeHelper";

const ContactList = () => {
	const contacts = useSelector((state) => state.contactsStore.contacts);
	return (
		<ul className="ContactList">
			{contacts.map((contact, i) => {
				return <ContactItem key={i} contact={contact} />;
			})}
		</ul>
	);
};

export const ContactItem = ({ contact }) => {
	const selectedContact = useSelector(state => state.contactsStore.selectedContact)
	const dispatch = useDispatch()
	const i18n = useTranslation();

	const getMessageIcon = () => {
		if (!contact.lastMessage /* || check message sent by me here */) {
			return "";
		}

		if (contact.lastMessage.status === "received") {
			return (
				<FontAwesomeIcon
					className="text-contact-message"
					icon={faCheckDouble}
				/>
			);
		}

		if (contact.lastMessage.status === "read") {
			return (
				<FontAwesomeIcon
					className="text-contact-message text-primary"
					icon={faCheckDouble}
				/>
			);
		}

		//sent
		return <FontAwesomeIcon className="text-contact-message" icon={faCheck} />;
	};

	const isSelected = () => {
		if (!selectedContact || selectedContact.id !== contact.id) {
			return ""
		}

		return " Selected"
	}

	return (
		<li className={`ContactItem${isSelected()}`} onClick={() => dispatch(selectContactAction(contact))}>
			<div className="ContactItem__Inner">
				<div className="ContactItem__Inner--Avatar">
					<div>
						{contact.photo && (
							<div className="ContactItem__Inner--AvatarImage"></div>
						)}
						{!contact.photo && <FontAwesomeIcon icon={faUser} />}
					</div>
				</div>
				<div className="ContactItem__Inner--Middle">
					<div>
						<span>{contact.name}</span>
						<small>
							{contact.lastMessage &&
							contact.lastMessage.createdAt instanceof Date
								? formatDateContacts(contact.lastMessage.createdAt, i18n)
								: ""}
						</small>
					</div>
					<div className="ContactItem__Inner--Middle--LastMessage">
						{getMessageIcon()}
						<span>
							{contact.lastMessage ? contact.lastMessage.message : ""}
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

//todo: when last message is sent by me, hide the check icon

export default ContactList;
