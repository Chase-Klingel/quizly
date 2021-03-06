import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

const styles = {
  header: {
    height: 50,
    borderBottom: '1px solid rgba(0, 0, 0, .08)'
  },

  logo: {
    fontSize: 24,
    marginTop: 25,
    marginLeft: 50,
    color: '#00ff00'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speciesSingular: '',
      speciesPlural: '',
      selectedSpecies: false,
      skipsRemaining: 3,
      strikeTotal: 0,
      pointTotal: 0,
      questionCount: 1,
      correctTotal: 0,
      correctAnswer: '',
      choicesRepo: [],
      questionsRepo: [],
      gameOver: false,
      wonGame: false
    }

    this.baseState = this.state

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
    this.setState(this.baseState)
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

      if (questionCount === this.state.questionsRepo.length) {
        this.setState({ wonGame: true });
      }

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
          <header style={ styles.header }>
            <h1 style={ styles.logo }>Quizly</h1>
          </header>
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
            wonGame={this.state.wonGame}
            setNewGame={this.setNewGame}
          />
        </div>
      </Router>
    );
  }
}

export default App;
