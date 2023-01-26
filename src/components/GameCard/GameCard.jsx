import { useEffect, useState, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import Button from "../Button/Button";
import styles from "./GameCard.module.scss";

const GameCard = ({
  question,
  correct_answer,
  incorrect_answers,
  selected,
  setSelected,
  submitted,
}) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const answers = [...incorrect_answers, correct_answer]
      .sort(() => Math.random() - 0.5)
      .map((answer) => ({
        text: answer,
        isSelected: false,
        isCorrect: answer === correct_answer,
      }));
    setAnswers(answers);
  }, [incorrect_answers, correct_answer]);

  const handleSelected = (answer) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer) => {
        if (prevAnswer.text === answer.text) {
          return {
            ...prevAnswer,
            isSelected: !prevAnswer.isSelected,
          };
        }
        return prevAnswer;
      })
    );
    setSelected((prevArray) => [...prevArray, { ...answer, isSelected: true }]);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.card__question}>{question}</h2>
      <div className={styles.card__answers}>
        {answers.map((answer) => {
          return submitted ? (
            <Button
              key={answer.text}
              variant={
                answer.isCorrect
                  ? "correct"
                  : answer.isSelected && !answer.isCorrect
                  ? "incorrect"
                  : "neutral"
              }
              disabled
            >
              {answer.text}
            </Button>
          ) : (
            <Button
              key={answer.text}
              variant={answer.isSelected ? "selected" : "neutral"}
              onClick={() => handleSelected(answer)}
            >
              {answer.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
