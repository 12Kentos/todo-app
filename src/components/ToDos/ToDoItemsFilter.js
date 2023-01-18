import { useState, useReducer } from "react";
import styles from "./ToDoItemsFilter.module.scss";
import Button from "../UI/Button";

const ToDoItemsFilter = () => {
  const [allBtn, setAllBtn] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);
  const [completedBtn, setCompletedBtn] = useState(false);

  const allBtnClickHandler = () => {
    if (!allBtn) {
      setActiveBtn(false);
      setCompletedBtn(false);
      setAllBtn(!allBtn);
    }
  };

  const activeBtnClickHandler = () => {
    if (!activeBtn) {
      setAllBtn(false);
      setCompletedBtn(false);
      setActiveBtn(!activeBtn);
    }
  };

  const completedBtnClickHandler = () => {
    if (!completedBtn) {
      setAllBtn(false);
      setActiveBtn(false);
      setCompletedBtn(!completedBtn);
    }
  };

  // const [buttonActive, setButtonActive] = useState(false);

  // const onClickHandler = () => {
  //   setButtonActive(!buttonActive);
  // };

  // const buttonStyles = `${styles["filter-button"]} ${
  //   buttonActive ? styles["active"] : ""
  // }`;

  // const buttonArray = [
  //   { id: "button1", text: "All", active: true },
  //   { id: "button2", text: "Active", active: false },
  //   { id: "button3", text: "Completed", active: false },
  // ];

  return (
    <div className={styles.wrapper}>
      {/* {buttonArray.map((btn) => (
        <Button
          className={styles["filter-button"]}
          key={btn.id}
          id={btn.id}
          active={btn.active}
        >
          {btn.text}
        </Button>
      ))} */}
      <button
        className={`${styles["filter-button"]} ${
          allBtn ? styles["active"] : ""
        }`}
        onClick={allBtnClickHandler}
      >
        All
      </button>
      <button
        className={`${styles["filter-button"]} ${
          activeBtn ? styles["active"] : ""
        }`}
        onClick={activeBtnClickHandler}
      >
        Active
      </button>
      <button
        className={`${styles["filter-button"]} ${
          completedBtn ? styles["active"] : ""
        }`}
        onClick={completedBtnClickHandler}
      >
        Completed
      </button>
    </div>
  );
};

export default ToDoItemsFilter;
