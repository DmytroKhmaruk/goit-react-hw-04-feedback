import styles from 'styled-components';

const SectionStyles = styles.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  color: #292a29;
  padding-left: 20px;

  & h2 {
    margin: 40px 0 50px 0;
  }
`;

export default SectionStyles;
