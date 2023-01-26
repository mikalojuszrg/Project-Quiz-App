import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import styles from "./GamePlay.module.scss";

const GamePlay = () => {
  const { gameQuestions, loading } = useContext(GameContext);
  const [selected, setSelected] = useState([]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {gameQuestions &&
            gameQuestions.map((question) => (
              <GameCard
                // toggleSelected={toggleSelected}
                selected={selected}
                key={question.question}
                {...question}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default GamePlay;
