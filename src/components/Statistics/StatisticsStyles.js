import styles from 'styled-components';

const StatisticsStyles = styles.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap: 25px;
  margin-top: 40px;

  & li {
  }

  & p {
    margin: 0;
  }
`;

export default StatisticsStyles;
