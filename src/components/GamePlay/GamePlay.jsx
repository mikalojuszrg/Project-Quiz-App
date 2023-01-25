import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import styles from "./GamePlay.module.scss";

const GamePlay = () => {
  const { gameOn } = useContext(GameContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  console.log(gameOn);

  useEffect(() => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((resp) => resp.json())
      .then((response) => {
        setQuestions(response);
        setLoading(false);
      });
  }, [gameOn]);

  //   const toggleSelected = (answer) => {
  //     setSelected((prevArr) => [...prevArr, answer]);
  //   };

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {questions.results &&
            questions.results.map((question) => (
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
