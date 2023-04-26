import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  options,
  onHandleGoodBtn,
  onHandleNeutralBtn,
  onHandleBadBtn,
}) => {
  console.log(Object.keys(options));
  return (
    <div className={css.buttonsList}>
      <button
        className={css.buttons}
        type="button"
        onClick={onHandleGoodBtn}
      >
        Good
      </button>
      <button
        className={`${css.buttons} ${css.neutralBtn}`}
        type="button"
        onClick={onHandleNeutralBtn}
      >
        Neutral
      </button>
      <button
        className={`${css.buttons} ${css.badBtn}`}
        type="button"
        onClick={onHandleBadBtn}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
