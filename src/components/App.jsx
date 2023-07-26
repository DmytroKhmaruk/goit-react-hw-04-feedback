import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './helpersMethods/helpers';

export default function App() {
  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

    const onButtonClick = (event) => {
    const feedbackType = event.target.name;
    setStates(prevState => {
      return { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
    });
  };

  const arrNamesOptions = Object.keys(states);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrNamesOptions} onButtonClick={onButtonClick} />
        {countTotalFeedback(states) ? (
          <Statistics
            stats={states}
            total={countTotalFeedback(states)}
            percentage={countPositiveFeedbackPercentage(states)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }

