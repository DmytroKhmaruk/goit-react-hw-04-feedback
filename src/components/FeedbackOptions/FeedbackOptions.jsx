import FeedbackOptionsStyles from './FeedbackOptionsStyles';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onButtonClick }) {
  const arrNamesOptions = Object.keys(options);

  return (
    <FeedbackOptionsStyles>
      {arrNamesOptions.map(name => {
        return (
          <button type="button" onClick={onButtonClick} key={name} name={name}>
            {name}
          </button>
        );
      })}
    </FeedbackOptionsStyles>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
