import React, { Component } from 'react';
import css from './FeetbackStatistics/FeetbackStatistics.module.css';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './Buttons FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  handleNeutralBtn = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  handleBadBtn = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    let total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    // console.log(this.countTotalFeedback());
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round(
      (this.state.good /
        this.countTotalFeedback()) *
        100
    );
  };

  render() {
    return (
      <div className={css.feedbackBox}>
        <Section title="Please leave feetback"></Section>
        <FeedbackOptions
          options={this.state}
          //   onLeaveFeedback={this.handleGoodBtn}
          onHandleGoodBtn={this.handleGoodBtn}
          onHandleNeutralBtn={
            this.handleNeutralBtn
          }
          onHandleBadBtn={this.handleBadBtn}
        ></FeedbackOptions>
        {/* <div className={css.buttonsList}>
          <button
            className={`${css.buttons} ${css.goodBtn} `}
            type="button"
            onClick={this.onHandleClick}
          >
            Good
          </button>
          <button
            className={`${css.buttons} ${css.neutralBtn} `}
            type="button"
            onClick={this.handleNeutralBtn}
          >
            Neutral
          </button>
          <button
            className={`${css.buttons} ${css.badBtn} `}
            type="button"
            onClick={this.handleBadBtn}
          >
            Bad
          </button>
        </div> */}
        <Section title="Statistics"></Section>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
export default App;
