export function countTotalFeedback({ good, neutral, bad }) {
  const total = good + neutral + bad;

  return total;
}

export function countPositiveFeedbackPercentage(state) {
  return Math.round((state.good / countTotalFeedback(state)) * 100) || 0;
}
