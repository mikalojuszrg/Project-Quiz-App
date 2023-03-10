import { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import Button from "../Button/Button";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import styles from "./GamePlay.module.scss";

const GamePlay = ({ toggleGameOn }) => {
  const { gameQuestions, loading, toggleGame, game } = useContext(GameContext);
  const [selected, setSelected] = useState([]);
  const [numCorrect, setNumCorrect] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  console.log(game);

  const playNewGame = () => {
    toggleGameOn();
    toggleGame();
  };

  const checkCorrectAnswers = () => {
    setNumCorrect(
      selected.filter(
        (answer, index) => answer.text === gameQuestions[index].correct_answer
      ).length
    );
    setSubmitted((prevValue) => !prevValue);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {gameQuestions &&
            gameQuestions.map((question) => (
              <GameCard
                key={question.question}
                {...question}
                selected={selected}
                setSelected={setSelected}
                submitted={submitted}
              />
            ))}
        </div>
      )}
      <div
        className={
          submitted
            ? styles["container__button--hidden"]
            : styles.container__button
        }
      >
        <Button onClick={checkCorrectAnswers}>Check answers</Button>
      </div>
      {submitted && (
        <div className={styles.container__score}>
          <p>You scored {numCorrect}/5 correct answers</p>
          <Button onClick={playNewGame}>Play again</Button>
        </div>
      )}
    </div>
  );
};

export default GamePlay;
