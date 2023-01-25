import styles from "./MainLayout.module.scss";
import classNames from "classnames";
import BlueBlob from "./svgs/BlueBlob";
import YellowBlob from "./svgs/YellowBlob";

const cn = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cn(styles.container)}>
      <div
        className={cn(styles.container__blob, styles["container__blob--blue"])}
      >
        <BlueBlob />
      </div>
      <div
        className={cn(
          styles.container__blob,
          styles["container__blob--yellow"]
        )}
      >
        <YellowBlob />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
