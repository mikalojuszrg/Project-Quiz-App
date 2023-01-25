import { BiLoaderCircle } from "react-icons/Bi";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div>
      <BiLoaderCircle className={styles.loader} />
    </div>
  );
};

export default Loader;
