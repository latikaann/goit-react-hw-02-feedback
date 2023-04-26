import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <p className={css.statisticksTitle}>
        {title}
      </p>
      {children}
    </section>
  );
};
export default Section;
