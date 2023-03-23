import { useState } from "react";
import { NewMessageForm, MessageList } from "../components";

export default function Home() {
  const [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
