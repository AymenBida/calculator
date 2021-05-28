import PropTypes from 'prop-types';
import './button.css';

const Button = ({ name, styling, clickHandler }) => (
  <button
    type="button"
    className={styling}
    onClick={() => clickHandler(name)}
    onContextMenu={(e) => {
      e.preventDefault();
      clickHandler(name);
    }}
  >
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  styling: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styling: 'button',
};

export default Button;
