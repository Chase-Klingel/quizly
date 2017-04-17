import React from 'react';
import Radium from 'radium';

const styles = {
  img: {
    maxWidth: '100%'
  },

  inactiveOption: {
    background: '#38acea',
    color: 'white',
    padding: '20px 0 20px 20px',
    borderBottom: '1px solid rgba(0, 0, 0, .08)'
  },

  selectedOption: {
    background: '#7638ea',
    color: 'white',
    padding: '20px 0 20px 20px',
    borderBottom: '1px solid rgba(0, 0, 0, .08)',
  },

  btn: {
    width: '100%',
    border: 'none',
    height: 50
  },

  submit: {
    background: '#38ea76',
    color: 'white'
  },

  skip: {
    border: '1px solid black',
    background: 'none'
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: ''
      // guessList: {
      //   1: false,
      //   2: false,
      //   3: false,
      //   4: false
      // }
    };

    // this.baseState = this.state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateQuestions = this.generateQuestions.bind(this);
    this.getRandChoice = this.getRandChoice.bind(this);
    this.shuffleOptions = this.shuffleOptions.bind(this);
  }

  handleSubmit() {
    const answer = this.props.questionsRepo[this.props.questionCount - 1].answer;

    this.props.getGuess(this.state.guess, answer);
  }

  handleChange(e) {
    // const nextGuessList = {};

    // for (let guess in this.state.guessList) {
    //   console.log(typeof guess, ' this is guess');
    //   console.log(key, ' this is key');
    //   if (guess === key.toString()) {
    //     console.log('we here');
    //     nextGuessList[guess] = true;
    //   } else {
    //     nextGuessList[guess] = false;
    //   }
    // }

    // this.setState({ guess: e.target.innerHTML, guessList: nextGuessList, clickedOption: true });
    console.log(e.target.innerHTML);
    this.setState({ guess: e.target.innerHTML });
  }

  handleSkip() {
    this.props.setSkips();
  }

  getRandChoice(questionOptions, allChoices, currChoice, foundUnique, answer) {
    if (foundUnique) {
      return currChoice;
    } else {
      const randIndex = Math.floor(Math.random() * allChoices.length);
      currChoice = allChoices[randIndex];

      if (questionOptions.indexOf(currChoice) === -1 && currChoice !== answer) {
        foundUnique = true;
      }

      return this.getRandChoice(questionOptions, allChoices, currChoice, foundUnique, answer);
    }
  }

  shuffleOptions(finalizedOptions) {
    for (let i = finalizedOptions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = finalizedOptions[i];
        finalizedOptions[i] = finalizedOptions[j];
        finalizedOptions[j] = temp;
    }

    return finalizedOptions;
  }

  generateQuestions(questionOptions) {
    const answer = this.props.questionsRepo[this.props.questionCount - 1].answer;

    if (questionOptions.length === 3) {
      questionOptions.push(answer);

      const finalizedOptions = this.shuffleOptions(questionOptions);

      return (
        <ul>
          <li onClick={this.handleChange} style={styles.inactiveOption}>{finalizedOptions[0]}</li>
          <li onClick={this.handleChange} style={styles.inactiveOption}>{finalizedOptions[1]}</li>
          <li onClick={this.handleChange} style={styles.inactiveOption}>{finalizedOptions[2]}</li>
          <li onClick={this.handleChange} style={styles.inactiveOption}>{finalizedOptions[3]}</li>
        </ul>

        // <ul>
        //   <li onClick={this.handleChange.bind(this, 1)} style={this.state.guessList["1"] === true ? styles.selectedOption : styles.inactiveOption} key="1">{finalizedOptions[0]}</li>
        //   <li onClick={this.handleChange.bind(this, 2)} style={this.state.guessList["2"] === true ? styles.selectedOption : styles.inactiveOption} key="2">{finalizedOptions[1]}</li>
        //   <li onClick={this.handleChange.bind(this, 3)} style={this.state.guessList["3"] === true ? styles.selectedOption : styles.inactiveOption} key="3">{finalizedOptions[2]}</li>
        //   <li onClick={this.handleChange.bind(this, 4)} style={this.state.guessList["4"] === true ? styles.selectedOption : styles.inactiveOption} key="4">{finalizedOptions[3]}</li>
        // </ul>
      );
    } else {
      const choice = this.getRandChoice(questionOptions, this.props.choicesRepo, null, false, answer);

      questionOptions.push(choice);

      return this.generateQuestions(questionOptions);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
        ensures that the handleChange when updating state doesn't reshuffle and
        change current question order
    */
    if (nextProps.questionCount !== this.props.questionCount) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <img style={styles.img} src={this.props.questionsRepo[this.props.questionCount - 1].img} alt="species" />
          </div>
          <div className="col s12 m5 offset-m1" style={styles.question}>
            { this.generateQuestions([]) }

            <div className="row" style={styles.btnContainer}>
              <div className="col s12 m6">
                <button onClick={this.handleSubmit} style={[styles.btn, styles.submit]}>submit</button>
              </div>
              <div className="col s12 m6">
                <button onClick={this.handleSkip} style={[styles.btn, styles.skip]}>skip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Question);
