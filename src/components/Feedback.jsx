import React, { Component } from "react";
import styles from "./Feedback.module.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

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
    this.setState((state) => ({
      [value]: state[value] + 1,
    }));
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
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onClickHandler}
        />
        {total !== 0 ? (
          <Statistics stats={[good, neutral, bad, total, positiveFeedback]} />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </div>
    );
  }
}

export default Feedback;
