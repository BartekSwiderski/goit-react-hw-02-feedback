import React, { Component } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 1,
    positiveFeedback: 0,
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div className={styles.app}>
        <h2 className={styles.title}>Please leave feedback</h2>
        <ul className={styles.buttons}>
          <li>
            <button className={styles.btn}>good</button>
          </li>
          <li>
            <button className={styles.btn}>neutral</button>
          </li>
          <li>
            <button className={styles.btn}>bad</button>
          </li>
        </ul>
        {total !== 0 ? (
          <div>
            <h2 className={styles.title}>Statistics</h2>
            <ul className={styles.stats}>
              <li className={styles.stat}>Good: {good}</li>
              <li className={styles.stat}>Neutral: {neutral}</li>
              <li className={styles.stat}>bad: {bad}</li>
              <li className={styles.stat}>Total: {total}</li>
              <li className={styles.stat}>
                Positive feedback: {positiveFeedback}%
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Feedback;
