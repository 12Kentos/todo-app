import styles from "./Checkmark.module.scss";

const Checkmark = (props) => {
  if (props.checked)
    return <input type="checkbox" className={styles.checkbox} checked />;
  return <input type="checkbox" className={styles.checkbox} />;
};

export default Checkmark;
