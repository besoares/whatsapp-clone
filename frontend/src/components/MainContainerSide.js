import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faCircleNotch,
	faCommentAlt,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ContactList from "./ContactList";
import { InputSearch } from "./Input";
import { ButtonIcon } from "./ButtonIcon";

const MainContainerSide = () => {
	return (
		<div className="MainContainer__Side">
			<HeaderSide />
			<div className="MainContainer__Side--Content">
				<MainContainerSideNotification />
				<MainContainerSideSearchBar />
				<MainContainerSideContacts />
			</div>
		</div>
	);
};

const MainContainerSideSearchBar = () => {
	return (
		<div className="MainContainer__Side--SearchBar">
			<InputSearch placeholder={"Pesquisar ou começar uma nova conversa"} />
		</div>
	);
};

const MainContainerSideContacts = () => {
	return (
		<div className="MainContainer__Side--Contacts">
			<ContactList />
		</div>
	);
};

const MainContainerSideNotification = () => {
	return <div className="MainContainer__Side--Notification"></div>;
};

const HeaderSide = () => {
	const profile = useSelector((state) => state.profileStore);
	return (
		<header>
			<div className="Grow">
				<div className="MainContainer__Side--Avatar">
					{profile.photo && (
						<div className="MainContainer__Side--AvatarImage"></div>
					)}
					{!profile.photo && <FontAwesomeIcon icon={faUser} />}
				</div>
			</div>
			<div>
				<ButtonIcon icon={faCircleNotch} />
				<ButtonIcon icon={faCommentAlt} />
				<ButtonIcon icon={faEllipsisV} />
			</div>
		</header>
	);
};

export default MainContainerSide;
