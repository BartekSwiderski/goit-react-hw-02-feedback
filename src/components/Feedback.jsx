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

  countTotalFeedback = () => {
    this.setState((state) => ({
      total: state.good + state.neutral + state.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
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

  onClickHandler = (option) => {
    this.countFeedback(option);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div className={styles.app}>
        <h2 className={styles.title}>Please leave feedback</h2>
        <ul className={styles.buttons}>
          <li className={styles.buttonList}>
            <button
              className={styles.btn}
              onClick={() => {
                this.onClickHandler("good");
              }}
            >
              good
            </button>
          </li>
          <li className={styles.buttonList}>
            <button
              className={styles.btn}
              onClick={() => {
                this.onClickHandler("neutral");
              }}
            >
              neutral
            </button>
          </li>
          <li className={styles.buttonList}>
            <button
              className={styles.btn}
              onClick={() => {
                this.onClickHandler("bad");
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
          <p className={styles.noFeedback}>There is no feedback!</p>
        )}
      </div>
    );
  }
}

export default Feedback;
