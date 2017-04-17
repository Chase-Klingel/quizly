import React from 'react';
import Radium from 'radium';

const SkipsComp = (props) => {
  const { styles } = SkipsComp;

  return (
    <div style={styles.skips}>
       <h3 style={styles.skips__remaining}>Skips remaining: {props.skipsRemaining}</h3>
    </div>
  );
}

SkipsComp.styles = {
  skips__remaining: {
    fontSize: 18
  }
}

const Skips = Radium(SkipsComp);
export default Skips;
