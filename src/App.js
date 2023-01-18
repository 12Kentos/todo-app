import { useState } from "react";
import styles from "./App.module.scss";
import NewToDo from "./components/NewToDos/NewToDo";
import ToDos from "./components/ToDos/ToDos";
import Heading from "./components/UI/Heading";
import Toggle from "./components/UI/Toggle";

function App() {
  // COMMENT Below code gets what color preference the current user has on their system

  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // COMMENT Below code sets the state of what their starting color shceme is

  const [colorScheme, setColorScheme] = useState(userPrefersDark);

  // COMMENT Below code is boiler plate for the first load up of the site

  const DUMMYITEMSLIST = [
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

  // COMMENT Below code sets the state of the list of items using the boiler plate data

  const [itemsList, setItemsList] = useState(DUMMYITEMSLIST);

  // COMMENT Below code toggles the state of the current color scheme

  const toggleColorSchemeHandler = () => {
    setColorScheme(!colorScheme);
  };

  // COMMENT Below code adds a new item to the todo list

  const addItemHandler = (newItem) => {
    setItemsList((prevState) => {
      return [newItem, ...prevState];
    });
  };

  // COMMENT Below code deletes the current item from the todo list

  const deleteItemHandler = (itemId) => {
    console.log("In APP");
    console.log(itemId);
    setItemsList((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      return updatedItems;
    });
  };

  return (
    <div
      className={`${styles["main-body"]} ${
        colorScheme ? styles["dark-mode"] : styles["light-mode"]
      }`}
    >
      <div
        className={`${styles.background} ${
          colorScheme ? styles.dark : styles.light
        }`}
      ></div>
      <div className={styles["heading-primary"]}>
        <Heading />
        <Toggle colorScheme={colorScheme} onClick={toggleColorSchemeHandler} />
      </div>
      <div>
        <NewToDo
          className={styles["new-todo"]}
          onAddItemHandler={addItemHandler}
        />
      </div>
      <ToDos items={itemsList} onDeleteItemHandler={deleteItemHandler} />
    </div>
  );
}

export default App;
