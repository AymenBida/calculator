import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={next ?? total ?? undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
