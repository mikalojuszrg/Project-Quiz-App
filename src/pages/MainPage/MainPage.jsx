import { useState } from "react";
import GameIntro from "../../components/GameIntro/GameIntro";
import GamePlay from "../../components/GamePlay/GamePlay";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const [gameOn, setGameOn] = useState(false);

  const toggleGameOn = () => {
    setGameOn((prevValue) => !prevValue);
  };

  return (
    <div className={styles.container}>
      {gameOn ? (
        <GamePlay toggleGameOn={toggleGameOn} />
      ) : (
        <GameIntro toggleGameOn={toggleGameOn} />
      )}
    </div>
  );
};

export default MainPage;
