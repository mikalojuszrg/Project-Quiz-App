import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";
import styles from "./GamePlay.module.scss";

const GamePlay = () => {
  const { gameOn } = useContext(GameContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((resp) => resp.json())
      .then((response) => {
        setQuestions(response);
        setLoading(false);
      });
  }, [gameOn]);

  console.log(questions);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {questions.results &&
            questions.results.map((question) => (
              <GameCard key={question.question} {...question} />
            ))}
        </div>
      )}
    </div>
  );
};

export default GamePlay;
