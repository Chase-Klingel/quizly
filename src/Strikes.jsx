import React from 'react';
// const styles = {
//   option: {
//     textAlign: 'center',
//     background: 'black',
//     color: 'white'
//   }
// }

export default class Strikes extends React.Component {
  render() {
    return (
      <div>
        <h3>Strikes: { this.props.strikeTotal }</h3>
      </div>
    );
  }
}
