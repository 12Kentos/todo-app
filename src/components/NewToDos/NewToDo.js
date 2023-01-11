import { useState } from "react";
import Checkmark from "../UI/Checkmark";
import styles from "./NewToDo.module.scss";

const NewToDo = (props) => {
  const [userInput, setUserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length > 0) setUserInput("");
  };

  const textChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <Checkmark />
      <input
        type="text"
        placeholder="Create a new todo..."
        className={styles["input-text"]}
        onChange={textChangeHandler}
        value={userInput}
      />
    </form>
  );
};

export default NewToDo;
