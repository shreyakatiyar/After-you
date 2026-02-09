
import "./WannaTalk.css"
import React, { useState } from "react";

function WannaTalk() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 💫 I’m Luna. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  // Predefined gentle responses
  const responses = [
    "I’m here with you, always 💖",
    "It’s okay to feel this way, healing takes time 🌷",
    "You’re doing better than you think 🕊",
    "Want to talk about what’s on your mind?",
    "Breathe… everything will be okay 💫",
    "You are loved, even when it doesn’t feel like it 🤍",
    "Let’s focus on one small good thing today 🌻"
  ];

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Gentle reply after 1 second
    setTimeout(() => {
      const reply =
        responses[Math.floor(Math.random() * responses.length)];
      setMessages([...newMessages, { sender: "bot", text: reply }]);
    }, 1000);
  };

  return (

    <>
    <div className="wanna-talk-header">
      <h1>Wanna Talk?</h1>
      <p>Chat with Luna to share your feelings and get some gentle advice</p>
    
     <div className="wanna-layout">
      <div className="main-container">
        <p>Articles on the mental health of girls indicate that they experience higher rates of anxiety, mood disorders, and eating disorders, often exacerbated by factors like societal pressures, gender disadvantage, and early marriage. Mental health challenges can also impact physical health and academic performance, and some studies suggest the need for systemic change to address the underlying causes, though girls' stronger social networks and willingness to talk about feelings can be protective factors.  </p>
      </div>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your feelings here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send 💌</button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default WannaTalk;
