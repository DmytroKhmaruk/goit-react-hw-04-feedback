import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './helpersMethods/helpers';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = (event) => {
    const feedbackType = event.target.name;
    this.setState(prevState => {
      return { [feedbackType]: prevState[feedbackType] + 1 };
    });
  };

  render() {
    return (
      <Section title="Please leave feedback" {...this.props}>
        <FeedbackOptions options={this.state} onButtonClick={this.onButtonClick} />
        {countTotalFeedback(this.state) ? (
          <Statistics
            stats={this.state}
            total={countTotalFeedback(this.state)}
            percentage={countPositiveFeedbackPercentage(this.state)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
