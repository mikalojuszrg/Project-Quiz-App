import { useContext } from "react";
import GameIntro from "../../components/GameIntro/GameIntro";
import GamePlay from "../../components/GamePlay/GamePlay";
import Loader from "../../components/Loader/Loader";
import { GameContext } from "../../contexts/GameContext";
import styles from "./MainPage.module.scss";

const StartPage = () => {
  const { gameOn } = useContext(GameContext);

  return (
    <div className={styles.container}>
      {gameOn ? <GamePlay /> : <GameIntro />}
    </div>
  );
};

export default StartPage;
