import styles from "./Button.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

const classNamesMap = {
  selected: [styles["button--selected"], styles["button"]],
  neutral: [styles["button--neutral"], styles["button"]],
  correct: [styles["button--correct"], styles["button"]],
  incorrect: [styles["button--incorrect"], styles["button"]],
  disabled: [styles["button--disabled"], styles["button"]],
  default: [styles["button--big"], styles["button"]],
};

const Button = ({ variant, children, onClick }) => {
  const classes = classNamesMap[variant] || classNamesMap.default;
  return (
    <button onClick={onClick} className={cn(...classes)}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
