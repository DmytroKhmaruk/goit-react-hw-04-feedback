import styles from 'styled-components';

const FeedbackOptionsStyles = styles.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  & button {
    box-sizing: border-box;
    padding: 8px;
    width: 100px;
    font-size: 18px;
    letter-spacing: 0.06em;
    border-radius: 7px;
    border: 1px solid #ebebeb;
    color: #727676;
    cursor: pointer;
  }

  & button:hover {
    background: #a9dde0;
    color: #554964;
    font-weight: bold;
    border: 1px solid #c3c4c1;
  }

  & button:active {
    background-color: #b2eeea;
  }
`;

export default FeedbackOptionsStyles;
