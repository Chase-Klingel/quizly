import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speciesSingular: '',
      speciesPlural: '',
      selectedSpecies: false,
      previousImg: '',
      skipsRemaining: 3,
      strikeTotal: 0,
      pointTotal: 0,
      questionCount: 1,
      correctTotal: 0,
      correctAnswer: '',
      choicesRepo: [],
      questionsRepo: [],
      gameOver: false
    }

    this.setInitialGameState = this.setInitialGameState.bind(this);
    this.setSkips = this.setSkips.bind(this);
    this.setNewGame = this.setNewGame.bind(this);
    this.getGuess = this.getGuess.bind(this);
  }

  setInitialGameState(speciesSingular, speciesPlural, choicesRepo, questionsRepo) {
    this.setState({
      speciesSingular: speciesSingular,
      speciesPlural: speciesPlural,
      choicesRepo: choicesRepo,
      questionsRepo: questionsRepo,
      selectedSpecies: true
    });
  }

  setGameState() {
    // set correctAnswer
    // set previousImg
    // set questionChoices
  }

  setSkips() {
    const skipsRemaining = this.state.skipsRemaining - 1;
    const questionCount = this.state.questionCount + 1;

    if (skipsRemaining === 0) {
      return this.setState({ gameOver: true });
    }

    this.setState({ skipsRemaining: skipsRemaining,
                    questionCount: questionCount
    })
  }

  setNewGame() {
    this.setState({ gameOver: false, selectedSpecies: false });
  }

  getGuess(guess, answer) {
    if (guess === answer) {
      let pointTotal;
      if (this.state.questionCount < 11) {
        pointTotal = this.state.pointTotal + 5;
      } else if (this.state.questionCount < 21) {
        pointTotal = this.state.pointTotal + 10;
      } else {
        pointTotal = this.state.pointTotal + 20;
      }

      const correctTotal = this.state.correctTotal + 1;
      const questionCount = this.state.questionCount + 1;

      this.setState({
        pointTotal: pointTotal,
        correctTotal: correctTotal,
        questionCount: questionCount
      });
    } else {
      const strikeTotal = this.state.strikeTotal + 1;
      const questionCount = this.state.questionCount + 1;

      if (strikeTotal === 3) {
        return this.setState({ gameOver: true });
      }

      this.setState({ strikeTotal: strikeTotal, questionCount: questionCount });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Main
            selectedSpecies={this.state.selectedSpecies}
            skipsRemaining={this.state.skipsRemaining}
            strikeTotal={this.state.strikeTotal}
            pointTotal={this.state.pointTotal}
            correctTotal={this.state.correctTotal}
            setInitialGameState={this.setInitialGameState}
            speciesSingular={this.state.speciesSingular}
            speciesPlural={this.state.speciesPlural}
            questionCount={this.state.questionCount}
            choicesRepo={this.state.choicesRepo}
            questionsRepo={this.state.questionsRepo}
            getGuess={this.getGuess}
            setSkips={this.setSkips}
            gameOver={this.state.gameOver}
            setNewGame={this.setNewGame}
          />
        </div>
      </Router>
    );
  }
}
