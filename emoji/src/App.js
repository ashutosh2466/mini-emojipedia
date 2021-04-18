import React, { useState } from "react";
import "./styles.css";
var color = "#818CF8";
var emojiDictionary = {
  "😄": "grinning face",
  "😍": "smilling face with heart eyes",
  "😂": "Face with tears in Eyes",
  "😛": "Face with Tongue",
  "🤑": "Money mouth face",
  "😘": "Face with kiss",
  "😉": "winking face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry! we don't Know it";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className=" App">
      <h1 style={{ color: color }}>search your emojis here</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emojis in our Database</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "[pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
