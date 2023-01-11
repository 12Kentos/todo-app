import styles from "./Toggle.module.scss";

const Toggle = (props) => {
  return (
    <div
      className={`${styles.toggle} ${
        props.colorScheme ? styles.dark : styles.light
      }`}
    ></div>
  );
};

export default Toggle;
