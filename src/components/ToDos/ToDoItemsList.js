import ToDoItem from "./ToDoItem";
import styles from "./ToDoItemsList.module.scss";

const ToDoItemsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={styles["no-text-wrapper"]}>
        <p className={styles["todo-font"]}>
          There are currently no todo's please add one.
        </p>
        ;
      </div>
    );
  }

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
