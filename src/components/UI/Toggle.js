import styles from "./Toggle.module.scss";

const Toggle = (props) => {
  return (
    <button
      className={`${styles.toggle} ${
        props.colorScheme ? styles.dark : styles.light
      }`}
      onClick={props.onClick}
    ></button>
  );
};

export default Toggle;
