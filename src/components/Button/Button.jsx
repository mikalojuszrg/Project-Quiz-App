import styles from "./Button.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

const Button = ({ variant, children }) => {
  return (
    <button
      className={`
      ${variant === "incorrect" ? cn(styles["button--incorrect"]) : ""}
      ${variant === "correct" ? cn(styles["button--correct"]) : ""}
      ${!variant ? cn(styles["button"]) : ""}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
