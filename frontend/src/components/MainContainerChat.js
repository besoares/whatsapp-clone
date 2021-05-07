import React from "react";
import whatsAppImage from "../assets/images/whatsapp-phone.jpg";

const MainContainerChat = () => {
  return (
    <div className="MainContainer__Chat">
      <header></header>
      <div className="MainContainer__Chat--Content Grow">
        <MainContainerChatConversation />
      </div>
    </div>
  );
};

const MainContainerChatConversation = () => {
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
      {containerImage}
    </div>
  );
};

export default MainContainerChat;
