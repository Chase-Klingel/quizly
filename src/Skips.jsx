import React from 'react';
// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class Skips extends React.Component {
  render() {
    return (
      <div>
        <h3>Skips remaining: { this.props.skipsRemaining }</h3>
      </div>
    );
  }
}
