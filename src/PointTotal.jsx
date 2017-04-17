import React from 'react';
import Radium from 'radium';

const PointTotalComp = (props) => {
  const { styles } = PointTotalComp;

  return (
    <div style={styles.points}>
      <h3 style={styles.point__detail}>Total Points: { props.pointTotal }</h3>
      <h3 style={styles.point__detail}>Correct Answers: { props.correctTotal }</h3>
    </div>
  );
}

PointTotalComp.styles = {
  point__detail: {
    fontSize: 18,
    textAlign: 'right'
  }
}

const PointTotal = Radium(PointTotalComp);
export default PointTotal;
