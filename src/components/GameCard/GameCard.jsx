import Button from "../Button/Button";
import styles from "./GameCard.module.scss";

const GameCard = ({
  question,
  correct_answer,
  incorrect_answers,
  selected,
  toggleSelected,
}) => {
  const answersArray = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  //   const handleSelected = (answer) => {
  //     toggleSelected(answer);
  //   };

  return (
    <div className={styles.card}>
      <h2 className={styles.card__question}>{question}</h2>
      <div className={styles.card__answers}>
        {answersArray.map((answer) => {
          return (
            <Button
              key={answer}
              //   onClick={() => handleSelected(answer)}
              variant={selected ? "selected" : "neutral"}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
