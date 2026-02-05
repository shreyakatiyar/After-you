

import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [showQuote, setShowQuote] = useState(false);
  const [mood, setMood] = useState("hopeful"); // default mood

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
      setAuthor(data[randomIndex].author || "Unknown");
    } catch (error) {
      setQuote("You are enough. You are loved. You will heal.");
      setAuthor("After-You");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Handle “Today's Quote” button click
  const handleShowQuote = () => {
    setShowQuote(!showQuote);
    fetchQuote();
  };

  // Cycle through moods when quote refreshes
  const moods = ["sad", "hopeful", "peaceful", "empowered", "healing"];
  const getMoodColor = (mood) => {
    switch (mood) {
      case "sad":
        return "rgba(100, 149, 237, 0.8)"; // blue
      case "hopeful":
        return "rgba(255, 182, 193, 0.8)"; // pink
      case "peaceful":
        return "rgba(240, 230, 200, 0.8)"; // beige
      case "empowered":
        return "rgba(200, 160, 255, 0.8)"; // purple
      case "healing":
        return "rgba(180, 238, 180, 0.8)"; // green
      default:
        return "rgba(255, 192, 203, 0.8)";
    }
  };

  useEffect(() => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  }, [quote]);

  return (
    <>
      <div className="hero">
        <div id="content">
          <h1>After-You</h1>
        </div>

        {/* Floating button */}
        <button className="todays-quote-btn" onClick={handleShowQuote}>
          Today’s Quote 💌
        </button>

        {/* Quote box (shows only when button clicked) */}
        {showQuote && (
          <div
            className="quote-box"
            style={{ backgroundColor: getMoodColor(mood) }}
          >
            <p className="quote">“{quote}”</p>
            <p className="author">— {author}</p>
            {/* <button className="quote-btn" onClick={fetchQuote}>
              New Quote
            </button> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

