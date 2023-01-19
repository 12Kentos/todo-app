import { useState } from "react";
import ToDoItemsList from "./ToDoItemsList";
import styles from "./ToDos.module.scss";

const ToDos = (props) => {
  return (
    <ToDoItemsList
      items={props.items}
      onDeleteItemHandler={props.onDeleteItemHandler}
      onSortActiveHandler={props.onSortActiveHandler}
      onSortCompletedHandler={props.onSortCompletedHandler}
      onSortAllHandler={props.onSortAllHandler}
    />
  );
};

export default ToDos;
