import React from 'react';
import Radium from 'radium';

const StrikesComp = (props) => {
  const { styles } = StrikesComp;

  return (
    <div>
      <h3>Strikes: { props.strikeTotal }</h3>
    </div>
  );
}

const Strikes = Radium(StrikesComp);
export default Strikes;
