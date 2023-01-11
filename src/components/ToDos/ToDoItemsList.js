import ToDoItem from "./ToDoItem";
import styles from "./ToDoItemsList.module.scss";

const ToDoItemsList = (props) => {
  return (
    <div>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default ToDoItemsList;
