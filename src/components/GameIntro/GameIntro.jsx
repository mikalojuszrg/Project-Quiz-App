import styles from "./GameIntro.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const GameIntro = ({ toggleGameOn }) => {
  const { gameQuestions } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__heading}>Quizzical</h1>
      <p className={styles.container__description}>Play, answer and win!</p>
      <Button onClick={toggleGameOn}>Start quiz</Button>
    </div>
  );
};

export default GameIntro;
