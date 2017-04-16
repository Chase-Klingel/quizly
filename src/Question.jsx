import React from 'react';
// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = { guess: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div>
        <img src={this.props.questionsRepo[this.props.questionCount - 1].img} alt="species" />
        <ul>
          <li onClick={this.handleChange}>{this.props.questionsRepo[this.props.questionCount - 1].answer}</li>
          <li onClick={this.handleChange}>2</li>
          <li onClick={this.handleChange}>3</li>
        </ul>

        <div className="row">
          <button onClick={ this.handleSubmit }>submit</button>
          <button onClick={ this.handleSkip }>skip</button>
        </div>
      </div>
    );
  }
}
