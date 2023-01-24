import Button from "../../components/Button/Button";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./StartPage.module.scss";

const StartPage = () => {
  return (
    <div>
      <h1>Quizzical</h1>
      <p>Play, answer and win!</p>
      <Button>Start quiz</Button>
      <MainLayout />
    </div>
  );
};

export default StartPage;
