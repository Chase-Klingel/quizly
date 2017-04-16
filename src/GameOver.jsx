import React from 'react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';

class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.setNewGame();
  }

  gameMessage() {
    if (this.props.wonGame) {
      return (
        <div>
          <h1>You made it to the end!</h1>
          <p>Total Points: { this.props.pointTotal }</p>
          <button onClick={ this.handleSubmit }>Play Again</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Game Over!</h1>
        <p>Total Points: { this.props.pointTotal }</p>
        <button onClick={ this.handleSubmit}>Play Again</button>
      </div>
    );
  }

  render() {
    if (!this.props.selectedSpecies) {
      return <Redirect to="/" />
    }

    return (
      <div>
        { this.gameMessage() }
      </div>
    );
  }
}

export default Radium( GameOver );
