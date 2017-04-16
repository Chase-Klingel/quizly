import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SelectSpecies from './SelectSpecies';
import GameRules from './GameRules';
import QuestionContainer from './QuestionContainer';
import GameOver from './GameOver';
// import NotFound from './NotFound';


export default class Main extends React.Component {
  render() {
    return (
      <div className="row">
        <Route path="/" render={
        () => <SelectSpecies
                setNewGame={this.props.setNewGame}
                setInitialGameState={this.props.setInitialGameState}
              />
        }/>

      <Route path="/rules" exactly render={() =>
        !this.props.selectedSpecies ? (
          <Redirect to="/" />
        ) : (
          <GameRules
            speciesSingular={this.props.speciesSingular}
            speciesPlural={this.props.speciesPlural}
          />
        )
      }/>

      <Route path="/game" exactly render={() =>
        this.props.gameOver ? (
          <GameOver
            setNewGame={this.props.setNewGame}
          />
        ) : (
          <QuestionContainer
            skipsRemaining={this.props.skipsRemaining}
            strikeTotal={this.props.strikeTotal}
            pointTotal={this.props.pointTotal}
            correctTotal={this.props.correctTotal}
            choicesRepo={this.props.choicesRepo}
            questionCount={this.props.questionCount}
            questionsRepo={this.props.questionsRepo}
            getGuess={this.props.getGuess}
            setSkips={this.props.setSkips}
          />
        )
      }/>

      {/* <Miss component={NotFound} />  */}
      </div>
    );
  }
}
