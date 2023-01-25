import styles from "./GameCard.module.scss";

const GameCard = ({ question, correct_answer, incorrect_answers }) => {
  const answersArray = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.card__question}>{question}</h2>
    </div>
  );
};

export default GameCard;
