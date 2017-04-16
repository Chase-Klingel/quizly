import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const GameRulesComp = (props) => {
  const { styles } = GameRulesComp;

  const speciesSingular = props.speciesSingular;
  const speciesPlural = props.speciesPlural;

  if (!speciesSingular || !speciesPlural) {
    return false;
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <p>
         So you think you are an expert on { speciesPlural.toLowerCase() }, huh? Let's
         test that knowledge then.
        </p>

        <h3>Rules of The game</h3>

        <p>
          <b>Overview:</b> You will be shown a photo of a { speciesSingular.toLowerCase() }.
          You will then be given 4 choices to choose from. If
          you guess correctly, you will move on having earned a certain amount
          of points. If you guess incorrectly, you will be penalized. See below
          for more details.
        </p>

        <h4>Point System</h4>

        <hr />

        <ul>
          <li>1 - 10 correct = 5 points</li>
          <li>11 - 20 correct = 10 points</li>
          <li>21 - 30 correct = 20 points</li>
        </ul>

        <h4>Three Strikes</h4>

        <p>
          You can guess incorrectly three times. Once you've guessed over
          3 times, it's game over!
        </p>

        <h4>Skips</h4>

        <p>
          You are alotted 3 skips during a game. It's impossible to know
          everything, right?
        </p>

        <Link to="/game">Got it! I'm ready to do some virtual observing.</Link>
      </div>
    </div>
  );
}

const GameRules = Radium(GameRulesComp);
export default GameRules;
