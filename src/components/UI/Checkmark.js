import styles from "./Checkmark.module.scss";

const Checkmark = (props) => {
  if (props.checked)
    return (
      <input
        type="checkbox"
        className={styles.checkbox}
        checked
        onClick={props.onClick}
      />
    );
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      onClick={props.onClick}
    />
  );
};

export default Checkmark;
