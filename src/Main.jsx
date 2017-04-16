import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Radium from 'radium';

import SelectSpecies from './SelectSpecies';
import GameRules from './GameRules';
import QuestionContainer from './QuestionContainer';
import GameOver from './GameOver';
// import NotFound from './NotFound';

class Main extends React.Component {
  render() {
    return (
      <div className="row">
        <Route path="/" exactly render={() =>
          <SelectSpecies
            selectedSpecies={this.props.selectedSpecies}
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
            gameOver={this.props.gameOver}
            wonGame={this.props.wonGame}
          />
        }/>

        <Route path="/game-over" exactly render={() =>
          <GameOver
            wonGame={this.props.wonGame}
            setNewGame={this.props.setNewGame}
            pointTotal={this.props.pointTotal}
            selectedSpecies={this.props.selectedSpecies}
          />
        }/>

        {/* <Route component={NotFound} /> */}
      </div>
    );
  }
}

export default Radium( Main );
