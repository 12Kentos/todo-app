import styles from "./App.module.scss";
import NewToDo from "./components/NewToDos/NewToDo";
import ToDos from "./components/ToDos/ToDos";
import Heading from "./components/UI/Heading";
import Toggle from "./components/UI/Toggle";

function App() {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const itemsList = [
    { id: "id1", item: "Complete online JavaScript course", completed: true },
    { id: "id2", item: "Jog around the park 3x", completed: false },
    { id: "id3", item: "10 minutes meditation", completed: false },
    { id: "id4", item: "Read for 1 hour", completed: false },
    { id: "id5", item: "Pick up groceries", completed: false },
    {
      id: "id6",
      item: "Complete ToDo App on FrontendMentor",
      completed: false,
    },
  ];

  return (
    <div className={styles["main-body"]}>
      <div
        className={`${styles.background} ${
          userPrefersDark ? styles.dark : styles.light
        }`}
      ></div>
      <div className={styles["heading-primary"]}>
        <Heading />
        <Toggle colorScheme={userPrefersDark} />
      </div>
      <div>
        <NewToDo className={styles["new-todo"]} />
      </div>
      <ToDos />
    </div>
  );
}

export default App;
