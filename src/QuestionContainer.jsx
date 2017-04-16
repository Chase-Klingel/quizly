import React from 'react';
import { Redirect } from 'react-router-dom';

import Skips from './Skips';
import Strikes from './Strikes';
import PointTotal from './PointTotal';
import Question from './Question';

export default class QuestionContainer extends React.Component {
  render() {
    if (this.props.gameOver || this.props.wonGame) {
      return <Redirect to="/game-over" />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <Skips
              skipsRemaining={this.props.skipsRemaining}
            />
          </div>

          <div className="col s12 m6">
            <Strikes
              strikeTotal={this.props.strikeTotal}
            />

            <PointTotal
              pointTotal={this.props.pointTotal}
              correctTotal={this.props.correctTotal}
            />
          </div>
        </div>

        <div className="row">
          <Question
            choicesRepo={this.props.choicesRepo}
            questionsRepo={this.props.questionsRepo}
            questionCount={this.props.questionCount}
            getGuess={this.props.getGuess}
            setSkips={this.props.setSkips}
            gameOver={this.props.gameOver}
            wonGame={this.props.wonGame} />
        </div>
      </div>
    );
  }
}
