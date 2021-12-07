import styles from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.buttons}>
      {options.map((option) => (
        <li key={option} className={styles.buttonList}>
          <button
            className={styles.btn}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
