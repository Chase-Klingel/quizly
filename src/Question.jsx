import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = { guess: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateQuestions = this.generateQuestions.bind(this);
    this.getRandChoice = this.getRandChoice.bind(this);
    this.shuffleOptions = this.shuffleOptions.bind(this);
  }

  handleSubmit() {
    console.log(this.props.questionCount - 1);
    const answer = this.props.questionsRepo[this.props.questionCount - 1].answer;

    this.props.getGuess(this.state.guess, answer);
  }

  handleChange(e) {
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
    console.log(finalizedOptions, ' finalized options');
    for (var i = finalizedOptions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = finalizedOptions[i];
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
          <li onClick={this.handleChange}>{finalizedOptions[0]}</li>
          <li onClick={this.handleChange}>{finalizedOptions[1]}</li>
          <li onClick={this.handleChange}>{finalizedOptions[2]}</li>
          <li onClick={this.handleChange}>{finalizedOptions[3]}</li>
        </ul>
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
        <img src={this.props.questionsRepo[this.props.questionCount - 1].img} alt="species" />

        { this.generateQuestions([]) }

        <div className="row">
          <button onClick={ this.handleSubmit }>submit</button>
          <button onClick={ this.handleSkip }>skip</button>
        </div>
      </div>
    );
  }
}
