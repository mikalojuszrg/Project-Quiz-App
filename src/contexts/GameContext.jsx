import { useState, createContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameOn, setGameOn] = useState(false);

  const toggleGameOn = () => {
    setGameOn(true);
  };

  return (
    <GameContext.Provider value={{ gameOn, toggleGameOn }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
