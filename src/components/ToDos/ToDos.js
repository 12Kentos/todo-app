import ToDoItemsList from "./ToDoItemsList";
import styles from "./ToDos.module.scss";

const ToDos = (props) => {

  return (
    <ToDoItemsList
      items={props.items}
      onDeleteItemHandler={props.onDeleteItemHandler}
    />
  );
};

export default ToDos;
