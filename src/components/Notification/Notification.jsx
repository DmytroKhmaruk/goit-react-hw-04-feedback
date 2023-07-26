import NotificationStyles from './NotificationStyles';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <NotificationStyles className="notification">{message}</NotificationStyles>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
