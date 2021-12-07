import styles from "./Feedback.module.css";

const Notification = ({ message }) => {
  return <p className={styles.noFeedback}>{message}</p>;
};

export default Notification;
