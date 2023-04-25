import React, { Component } from "react";
import css from "./FeetbackStatistics.module.css"





class FeetbackStatisticks extends Component {

    state = {
      
    good: 0,
    neutral: 0,
    bad: 0
  
    }



    handleGoodBtn = () => {
        this.setState({
            good: this.state.good + 1,
        })
    }
    handleNeutralBtn = () => { 
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
    handleBadBtn = () => {
        this.setState({
            bad: this.state.bad + 1,
        })
    }
    
    countTotalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }
    countPositiveFeedbackPercentage = () => {
        // console.log(this.countTotalFeedback());
        if (this.countTotalFeedback() === 0) {
            return 0;
        }
        return (Math.round(this.state.good / this.countTotalFeedback() * 100));
    }
    

    render() {

        // const total = this.state;
        // const totalArray = Object.values(total);
        // const totalFeetback = totalArray.reduce((previousValue, number) => {
        //     return previousValue + number;
        // }, 0);

        // console.log(totalFeetback);


      return <div className={css.feedbackBox}>
          <p className={css.statisticksTitle}>Please leave feetback</p>
          <div className={css.buttonsList}>
              <button className={`${css.buttons} ${css.goodBtn} `} type="button" onClick={this.handleGoodBtn}>Good</button>
              <button className={`${css.buttons} ${css.neutralBtn} `} type="button" onClick={this.handleNeutralBtn}>Neutral</button>
              <button className={`${css.buttons} ${css.badBtn} `} type="button" onClick={this.handleBadBtn}>Bad</button>
          </div>
          <p className={css.statisticksBox}>Statistics</p>
          <ul className={css.statisticksList}>
              <li className={css.statisticksItem}><p>Good:</p><span>{this.state.good}</span></li>
              <li className={css.statisticksItem}><p>Neutral:</p><span>{this.state.neutral}</span></li>
              <li className={css.statisticksItem}><p>Bad:</p><span>{this.state.bad}</span></li>
          </ul>
          <div>
            <p className={css.feedbackTotal}>Total: <span>{this.countTotalFeedback()}</span></p>
            <p className={css.feedbackPercentage}>Positive feedback: <span>{this.countPositiveFeedbackPercentage()}</span></p>
          </div>
    </div>;
  }
}

export default  FeetbackStatisticks;