import React from "react";
import ContactList from "./ContactList";
import { InputSearch } from "./Input";

const MainContainerSide = () => {
  return (
    <div className="MainContainer__Side">
      <header></header>
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
  return <div className="MainContainer__Side--Contacts">
      <ContactList />
  </div>;
};

const MainContainerSideNotification = () => {
  return <div className="MainContainer__Side--Notification">
  </div>;
};

export default MainContainerSide;
