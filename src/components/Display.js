import PropTypes from 'prop-types';
import './display.css';

const TriggerLittle = (result) => {
  if (result.length < 11) return 'display';

  return 'display display--little';
};

const Display = ({ result }) => (
  <div className={TriggerLittle(result)}>{ result }</div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
