import SectionStyles from './SectionStyles';
import PropTypes from 'prop-types';

function Section({ children, title, ...restProps }) {
  return (
    <SectionStyles {...restProps}>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
