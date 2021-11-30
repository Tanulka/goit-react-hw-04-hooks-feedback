import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Section from './components/Section.jsx';
import Statistics from './components/Statistics.jsx';
import Notification from './components/Notification.jsx';

function App() {
  const [good, setGood] = useState(0);

  const addFeedbackGood = () => {
    setGood(prevGood => prevGood + 1);
    calcStatistics();
  };

  const [neutral, setNeutral] = useState(0);

  const addFeedbackNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
    calcStatistics();
  };

  const [bad, setBad] = useState(0);

  const addFeedbackBad = () => {
    setBad(prevBad => prevBad + 1);
    calcStatistics();
  };

  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const calcStatistics = () => {
    const total = bad + good + neutral;
    setTotal(total);
    const positivePercentage = Math.round((good / total) * 100);
    setPositivePercentage(positivePercentage);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions handleOnClick={addFeedbackGood || addFeedbackNeutral || addFeedbackBad}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            bad={bad}
            good={good}
            neutral={neutral}
            positivePercentage={positivePercentage}
            total={total}
          ></Statistics>
        )}
      </Section>
    </>
  );
}

export default App;
