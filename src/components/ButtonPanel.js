import PropTypes from 'prop-types';
import Button from './Button';
import './buttonPanel.css';

export default function ButtonPanel({ clickHandler }) {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <div className="row">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="0" clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" styling="button button--last" clickHandler={handleClick} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
