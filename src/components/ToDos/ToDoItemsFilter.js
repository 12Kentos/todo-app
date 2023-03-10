import { useState, useReducer } from "react";
import styles from "./ToDoItemsFilter.module.scss";
import Button from "../UI/Button";

const ToDoItemsFilter = (props) => {
  const [allBtn, setAllBtn] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);
  const [completedBtn, setCompletedBtn] = useState(false);

  const allBtnClickHandler = () => {
    if (!allBtn) {
      setActiveBtn(false);
      setCompletedBtn(false);
      setAllBtn(!allBtn);
      props.onSortAllHandler();
    }
  };

  const activeBtnClickHandler = () => {
    if (!activeBtn) {
      setAllBtn(false);
      setCompletedBtn(false);
      setActiveBtn(!activeBtn);
      props.onSortActiveHandler();
    }
  };

  const completedBtnClickHandler = () => {
    if (!completedBtn) {
      setAllBtn(false);
      setActiveBtn(false);
      setCompletedBtn(!completedBtn);
      props.onSortCompletedHandler();
    }
  };

  return (
    <div className={styles.wrapper}>
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
