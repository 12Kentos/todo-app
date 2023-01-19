import { useState } from "react";
import Checkmark from "../UI/Checkmark";
import styles from "./ToDoItem.module.scss";

const ToDoItem = (props) => {
  const deleteItem = () => {
    props.onDeleteItemHandler(props.id);
  };

  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(props.checked);

  const onHoverHandler = () => {
    setHovered(!hovered);
  };

  const checkedHandler = () => {
    setChecked(!checked);
    props.object1.completed = !props.object1.completed;
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
    >
      <Checkmark checked={checked} onClick={checkedHandler} />
      <p
        className={`${styles["todo-font"]} ${
          checked ? styles["todo-font-crossed"] : ""
        }`}
      >
        {props.item}
      </p>
      <button
        className={`${styles.delete} ${hovered ? styles.active : ""}`}
        onClick={deleteItem}
      ></button>
    </div>
  );
};

export default ToDoItem;
