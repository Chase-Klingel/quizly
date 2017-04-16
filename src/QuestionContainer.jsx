import React from 'react';
import Skips from './Skips';
import Strikes from './Strikes';
import PointTotal from './PointTotal';
import Question from './Question';

// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class QuestionContainer extends React.Component {
  render() {
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
          />
        </div>
      </div>
    );
  }
}
