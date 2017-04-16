import React from 'react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';

import Skips from './Skips';
import Strikes from './Strikes';
import PointTotal from './PointTotal';
import Question from './Question';

const QuestionContainerComp = (props) => {
  const { styles } = QuestionContainerComp;

  if (props.gameOver || props.wonGame) {
    return <Redirect to="/game-over" />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <Skips
            skipsRemaining={props.skipsRemaining}
          />
        </div>

        <div className="col s12 m6">
          <Strikes
            strikeTotal={props.strikeTotal}
          />

          <PointTotal
            pointTotal={props.pointTotal}
            correctTotal={props.correctTotal}
          />
        </div>
      </div>

      <div className="row">
        <Question
          choicesRepo={props.choicesRepo}
          questionsRepo={props.questionsRepo}
          questionCount={props.questionCount}
          getGuess={props.getGuess}
          setSkips={props.setSkips}
          gameOver={props.gameOver}
          wonGame={props.wonGame} />
      </div>
    </div>
  );
}

const QuestionContainer = Radium(QuestionContainerComp);
export default QuestionContainer;
