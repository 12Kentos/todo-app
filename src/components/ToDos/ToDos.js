import { useState } from "react";
import ToDoItemsList from "./ToDoItemsList";
import styles from "./ToDos.module.scss";

const ToDos = (props) => {
  // const filteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  const [testing, setTesting] = useState(
    props.items.filter((item) => {
      return !item.completed;
    })
  );

  const test = props.items.filter((item) => {
    return !item.completed;
  });

  return (
    <ToDoItemsList
      items={props.items}
      onDeleteItemHandler={props.onDeleteItemHandler}
      onSortActiveHandler={props.onSortActiveHandler}
      onSortCompletedHandler={props.onSortCompletedHandler}
    />
  );
};

export default ToDos;
