import React from "react";
import useGame from "./hooks/useGame";

export default function App() {
  const {
    text,
    inputRef,
    timer,
    isTimeRunning,
    wordCount,
    handleChange,
    gameStart,
  } = useGame();

  return (
    <main>
      <h1>How Fast Can You Type?</h1>
      <form>
        <textarea
          ref={inputRef}
          value={text}
          onChange={handleChange}
          disabled={!isTimeRunning}
          placeholder={isTimeRunning ? "" : "Press Start and type!"}
        />
      </form>
      <h4>Time Remaining: {timer}</h4>
      <button disabled={isTimeRunning} onClick={gameStart}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </main>
  );
}
