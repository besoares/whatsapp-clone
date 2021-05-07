import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble, faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/ContactList.scss";
import { useTranslation } from "react-i18next";
import { formatDateContacts } from "../helpers/DateTimeHelper";

const ContactList = () => {
  // const i18n = useTranslation();
  return (
    <ul className="ContactList">
      {contacts.map((contact, i) => {
        return <ContactItem key={i} contact={contact} />;
      })}
    </ul>
  );
};

export const ContactItem = ({ contact }) => {
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
    return (
      <FontAwesomeIcon
          className="text-contact-message"
          icon={faCheck}
        />
    )
  };

  const onClick = () => {
    alert('oi')
  }

  return (
    <li className="ContactItem" onClick={() => onClick()}>
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

const contacts = [
  {
    photo: "",
    name: "Nickolas",
    lastMessage: {
      message: "testing message",
      createdAt: new Date(),
      status: "received",
    },
    silenced: false,
  },
  {
    photo: "",
    name: "Jhon Mark",
    lastMessage: {
      message: "testing message 2",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
      status: "sent",
    },
    silenced: false,
  },
  {
    photo: "",
    name: "Mathew Gregor",
    lastMessage: {
      message: "testing message 3",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
      status: "read",
    },
    silenced: false,
  },
  {
    photo: "",
    name: "Kathy",
    lastMessage: {
      message: "testing message 4",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
      status: "received",
    },
    silenced: false,
  },
  {
    photo: "",
    name: "Cristine Diana",
    lastMessage: {
      message: "testing message 5",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 7)),
      status: "read",
    },
    silenced: false,
  },
];
