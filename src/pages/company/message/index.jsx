import React from "react";
import MessagePage from "../../../components/Message";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const Message = () => {
  return (
    <DarkTheme>
      <Navbar />
      <MessagePage />
      <Footer />
    </DarkTheme>
  );
};

export default Message;
