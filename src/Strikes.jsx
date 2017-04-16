import React from 'react';

export default class Strikes extends React.Component {
  render() {
    return (
      <div>
        <h3>Strikes: { this.props.strikeTotal }</h3>
      </div>
    );
  }
}
