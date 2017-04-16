import React from 'react';
import { Redirect } from 'react-router-dom';
// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    this.setState({ redirect: '/' })

    // this.props.setNewGame();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }

    return (
      <div>
        <h1>Game Over!</h1>
        <button onClick={ this.handleSubmit }>Play Again</button>
      </div>
    );
  }
}
