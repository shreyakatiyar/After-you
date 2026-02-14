import React, { useState, useEffect } from "react";
import "./PersonalStories.css";

function PersonalStories() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState("");
  const [newComment, setNewComment] = useState("");

  // Load stories from localStorage
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];
    setStories(savedStories);
  }, []);

  // Save stories to localStorage
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  // Add a new story
  const handleAddStory = () => {
    if (newStory.trim() === "") return;
    const story = {
      id: Date.now(),
      text: newStory,
      loves: 0,
      comments: [],
    };
    setStories([story, ...stories]);
    setNewStory("");
  };

  // Add a love
  const handleLove = (id) => {
    const updated = stories.map((story) =>
      story.id === id ? { ...story, loves: story.loves + 1 } : story
    );
    setStories(updated);
  };

  // Add a kind comment
  const handleAddComment = (id) => {
    if (newComment.trim() === "") return;
    const  updated = stories.map((story) =>
      story.id === id
        ? { ...story, comments: [...story.comments, newComment] }
        : story
    );
    setStories(updated);
    setNewComment("");
  };

  return (
    <div className="stories-container">
      <h2>💌 Personal Healing Stories</h2>
      <p className="subtitle">
        Read stories shared by brave women, or share your own anonymously.
      </p>

      {/* Write Story Section */}
      <div className="story-form">
        <textarea
          placeholder="Write your story here... (It stays anonymous 💫)"
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
        ></textarea>
        <button onClick={handleAddStory}>Share Story</button>
      </div>

      {/* Display Stories */}
      <div className="story-list">
        {stories.length === 0 ? (
          <p className="no-stories">No stories yet. Be the first to share 💖</p>
        ) : (
          stories.map((story) => (
            <div key={story.id} className="story-card">
              <p className="story-text">“{story.text}”</p>
              <div className="story-actions">
                <button onClick={() => handleLove(story.id)} className="love-btn">
                  💖 Send Love ({story.loves})
                </button>
              </div>

              {/* Comments Section */}
              <div className="comments-section">
                <h4>💬 Kind Comments</h4>
                {story.comments.length === 0 ? (
                  <p className="no-comments">No comments yet. Be kind 🌸</p>
                ) : (
                  story.comments.map((comment, index) => (
                    <p key={index} className="comment">
                      {comment}
                    </p>
                  ))
                )}

                <div className="comment-form">
                  <input
                    type="text"
                    placeholder="Write a kind comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button onClick={() => handleAddComment(story.id)}>Send</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PersonalStories;
