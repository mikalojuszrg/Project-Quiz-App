import { useState, createContext, useEffect } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameQuestions, setGameQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((resp) => resp.json())
      .then((response) => {
        setGameQuestions(response.results);
        setLoading(false);
      });
  }, [game]);

  const toggleGame = () => {
    setGame((prevValue) => !prevValue);
  };

  return (
    <GameContext.Provider
      value={{
        gameQuestions,
        setGameQuestions,
        loading,
        setLoading,
        toggleGame,
        game,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
