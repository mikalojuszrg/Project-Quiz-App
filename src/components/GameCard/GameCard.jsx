import { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import styles from "./GameCard.module.scss";

const GameCard = ({
  question,
  correct_answer,
  incorrect_answers,
  setSelected,
  submitted,
}) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const answers = [...incorrect_answers, correct_answer]
      .sort(() => Math.random() - 0.5)
      .filter((prevAnswer) => !prevAnswer.isSelected)
      .map((answer) => ({
        text: answer,
        isSelected: false,
        isCorrect: answer === correct_answer,
        question: question,
      }));
    setAnswers(answers);
  }, [incorrect_answers, correct_answer]);

  const handleSelected = (answer) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer) => ({
        ...prevAnswer,
        isSelected: prevAnswer.text === answer.text,
      }))
    );
    setSelected((prev) => [
      ...prev.filter((item) => item.question !== answer.question),
      answer,
    ]);
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
