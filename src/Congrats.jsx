import React from 'react';
// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class Congrats extends React.Component {
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
    return (
      <div>
        <h1>You made it to the end!</h1>
        <button onClick={ this.handleSubmit }>Play Again</button>
      </div>
    );
  }
}
