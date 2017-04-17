import React from 'react';
import Radium from 'radium';

const StrikesComp = (props) => {
  const { styles } = StrikesComp;

  return (
    <div style={styles.strikes}>
      <h3 style={styles.strikes__total}>Strikes: { props.strikeTotal }</h3>
    </div>
  );
}

StrikesComp.styles = {
  strikes__total: {
    fontSize: 18
  }
}

const Strikes = Radium(StrikesComp);
export default Strikes;
