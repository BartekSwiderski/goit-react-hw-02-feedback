import React, { Component } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  countTotal = () => {
    this.setState((state) => ({
      total: state.good + state.neutral + state.bad,
    }));
  };
  countpositiveFeedback = () => {
    this.setState((state) => ({
      positiveFeedback: Math.round((state.good * 100) / state.total),
    }));
  };

  countFeedback = (value) => {
    if (value === "good") {
      this.setState((state) => ({
        good: state.good + 1,
      }));
    }
    if (value === "bad") {
      this.setState((state) => ({
        bad: state.bad + 1,
      }));
    }
    if (value === "neutral") {
      this.setState((state) => ({
        neutral: state.neutral + 1,
      }));
    }
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div className={styles.app}>
        <h2 className={styles.title}>Please leave feedback</h2>
        <ul className={styles.buttons}>
          <li>
            <button
              className={styles.btn}
              onClick={() => {
                this.countFeedback("good");
                this.countTotal();
                this.countpositiveFeedback();
              }}
            >
              good
            </button>
          </li>
          <li>
            <button
              className={styles.btn}
              onClick={() => {
                this.countFeedback("neutral");
                this.countTotal();
                this.countpositiveFeedback();
              }}
            >
              neutral
            </button>
          </li>
          <li>
            <button
              className={styles.btn}
              onClick={() => {
                this.countFeedback("bad");
                this.countTotal();
                this.countpositiveFeedback();
              }}
            >
              bad
            </button>
          </li>
        </ul>
        {total !== 0 ? (
          <div>
            <h2 className={styles.title}>Statistics</h2>
            <ul className={styles.stats}>
              <li className={styles.stat}>Good: {good}</li>
              <li className={styles.stat}>Neutral: {neutral}</li>
              <li className={styles.stat}>Bad: {bad}</li>
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
