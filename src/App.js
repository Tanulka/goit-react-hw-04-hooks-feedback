import React, { useState, useEffect } from 'react';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Section from './components/Section.jsx';
import Statistics from './components/Statistics.jsx';
import Notification from './components/Notification.jsx';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = typeButton => {
    switch (typeButton) {
      case 'good':
        setGood(prevGood => prevGood + 1);

        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);

        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);

        break;

      default:
        console.log(`кнопка ${typeButton} не обрабатывается`);
    }
  };

  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(calcStatistics, [good, neutral, bad]);

  function calcStatistics() {
    const total = bad + good + neutral;
    setTotal(total);
    const positivePercentage = Math.round((good / total) * 100);
    setPositivePercentage(positivePercentage);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions handleOnClick={addFeedback}></FeedbackOptions>
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
