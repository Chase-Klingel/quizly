import React from 'react';
import Radium from 'radium';

const PointTotalComp = (props) => {
  const { styles } = PointTotalComp;

  return (
    <div>
      <h3>Total Points: { props.pointTotal }</h3>
      <h3>Answered Correctly: { props.correctTotal }</h3>
    </div>
  );
}

const PointTotal = Radium(PointTotalComp);
export default PointTotal;
