import ToDoItem from "./ToDoItem";
import styles from "./ToDoItemsList.module.scss";

const ToDoItemsList = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.items.map((item) => (
        <ToDoItem
          id={item.id}
          key={item.id}
          item={item.item}
          checked={item.completed}
          onDeleteItemHandler={props.onDeleteItemHandler}
        />
      ))}
    </div>
  );
};

export default ToDoItemsList;
