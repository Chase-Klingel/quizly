import React from 'react';

export default class PointTotal extends React.Component {
  render() {
    return (
      <div>
        <h3>Total Points: { this.props.pointTotal }</h3>
        <h3>Answered Correctly: { this.props.correctTotal }</h3>
      </div>
    );
  }
}
