import Checkmark from "../UI/Checkmark";
import styles from "./ToDoItem.module.scss";

const ToDoItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <Checkmark />
      <p>{props.item}</p>
    </div>
  );
};

export default ToDoItem;
