import { useState } from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
  const [buttonActive, setButtonActive] = useState(props.active);

  const onClickHandler = () => {
    setButtonActive(!buttonActive);
  };

  const buttonStyles = `${props.className} ${
    buttonActive ? styles.active : ""
  }`;

  return (
    <button
      className={buttonStyles}
      type={props.type || "button"}
      onClick={onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
