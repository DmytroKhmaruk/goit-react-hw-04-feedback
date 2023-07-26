import StatisticsStyles from './StatisticsStyles';
import PropTypes from 'prop-types';

function Statistics({ stats, total, percentage }) {
  const arrStatsItem = Object.entries({
    ...stats,
    total: total,
    percentage: percentage,
  });

  return (
    <StatisticsStyles>
      {arrStatsItem.map(([name, value]) => {
        return (
          <li key={name}>
            <p>
              {name}: {name === 'percentage' ? value + ' %' : value}
            </p>
          </li>
        );
      })}
    </StatisticsStyles>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
