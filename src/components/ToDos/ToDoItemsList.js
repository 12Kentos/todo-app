import ToDoItem from "./ToDoItem";
import styles from "./ToDoItemsList.module.scss";
import ToDoItemsMenu from "./ToDoItemsMenu";

const ToDoItemsList = (props) => {
  // if (props.items.length === 0) {
  //   return (
  //     <div className={styles["no-text-wrapper"]}>
  //       <p className={styles["todo-font"]}>
  //         There are currently no todo's please add one.
  //       </p>
  //       ;
  //     </div>
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      {props.items.map((item) => (
        <ToDoItem
          id={item.id}
          key={item.id}
          item={item.item}
          checked={item.completed}
          onDeleteItemHandler={props.onDeleteItemHandler}
          object1={item}
        />
      ))}
      {props.items.length === 0 && (
        <div className={styles["no-text-wrapper"]}>
          <p className={styles["todo-font"]}>
            There are currently no todo's please add one.
          </p>
          ;
        </div>
      )}
      <ToDoItemsMenu
        items={props.items}
        onSortActiveHandler={props.onSortActiveHandler}
        onSortCompletedHandler={props.onSortCompletedHandler}
        onSortAllHandler={props.onSortAllHandler}
        onDeleteCompletedItemHandler={props.onDeleteCompletedItemHandler}
      />
    </div>
  );
};

export default ToDoItemsList;
