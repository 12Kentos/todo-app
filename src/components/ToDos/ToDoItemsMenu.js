import { useState } from "react";

import styles from "./ToDoItemsMenu.module.scss";
import ToDoItemsFilter from "./ToDoItemsFilter";

const ToDoItemsMenu = (props) => {
  const plural = (
    <p className={styles.counter}>{props.items.length} Items left</p>
  );

  return (
    <div className={styles.wrapper}>
      {props.items.length < 2 ? (
        <p className={styles.counter}>{props.items.length} Item left</p>
      ) : (
        plural
      )}
      <ToDoItemsFilter
        onSortActiveHandler={props.onSortActiveHandler}
        onSortCompletedHandler={props.onSortCompletedHandler}
        onSortAllHandler={props.onSortAllHandler}
      />
      <button className={styles["menu-button"]}>Clear Completed</button>
    </div>
  );
};

export default ToDoItemsMenu;
