import PropTypes from 'prop-types';
import './button.css';

export default function Button(props) {
  const { name } = props;
  return (
    <button type="button" className="button">{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
