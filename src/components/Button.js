import PropTypes from 'prop-types';
import './button.css';

export default function Button(props) {
  const { name, styling } = props;
  return (
    <button type="button" className={styling}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  styling: PropTypes.string,
};

Button.defaultProps = {
  styling: 'button',
};
