import styles from "./Feedback.module.css";

const Statistics = ({ stats }) => {
  return (
    <div>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.stats}>
        <li className={styles.stat}>Good: {stats[0]}</li>
        <li className={styles.stat}>Neutral: {stats[1]}</li>
        <li className={styles.stat}>Bad: {stats[2]}</li>
        <li className={styles.stat}>Total: {stats[3]}</li>
        <li className={styles.stat}>Positive feedback: {stats[4]}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
