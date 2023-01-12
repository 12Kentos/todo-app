import { useState } from "react";
import Checkmark from "../UI/Checkmark";
import styles from "./ToDoItem.module.scss";

// export default function Component () {
//   const [hovered, setHovered] = useState(false);
//   const toggleHover = () => setHovered(!hovered);
//   return (
//     <button
//       className={hovered ? 'pulse animated' : ''}
//       onMouseEnter={toggleHover}
//       onMouseLeave={toggleHover}
//     >
//     </button>
//   )
// }

const ToDoItem = (props) => {
  const deleteItem = () => {
    props.onDeleteItemHandler(props.id);
  };

  const [hovered, setHovered] = useState(false);

  const onHoverHandler = () => {
    setHovered(!hovered);
  };

  const isChecked = props.checked;
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
    >
      <Checkmark checked={isChecked} />
      <p className={styles["todo-font"]}>{props.item}</p>
      <button
        className={`${styles.delete} ${hovered ? styles.active : ""}`}
        onClick={deleteItem}
      ></button>
    </div>
  );
};

export default ToDoItem;
