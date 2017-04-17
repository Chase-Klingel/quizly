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
    <div>
      <div className="row" style={ styles.intro }>
        <div className="col s12">
          <h2 style={ styles.intro__overview }>
            So you're the { speciesSingular.toLowerCase() } expert, huh?
          </h2>

          <p style={ styles.intro__subOverview }>
            Let's test that knowledge.
          </p>
        </div>
      </div>

      <div className="row" style={[styles.rule, styles.oddRule]}>
        <div className="col s12 m8 offset-m2">
          <h3 style={ styles.rule__header }>Rules of The game</h3>

          <p style={ styles.rule__details }>
            You will be shown a photo of a { speciesSingular.toLowerCase() }.
            You will then be given 4 choices to choose from. If
            you guess correctly, you will move on having earned a certain amount
            of points. If you guess incorrectly, you will be penalized. See below
            for more details.
          </p>
        </div>
      </div>

      <div className="row" style={[styles.rule, styles.evenRule]}>
        <div className="col s12 m8 offset-m2">

          <h4 style={ styles.rule__header }>Point System</h4>

          <ul>
            <li style={ styles.rule__details }>1 - 10 correct = 5 points</li>
            <li style={ styles.rule__details }>11 - 20 correct = 10 points</li>
            <li style={ styles.rule__details }>21 - 30 correct = 20 points</li>
          </ul>
        </div>
      </div>

      <div className="row" style={[styles.rule, styles.oddRule]}>
        <div className="col s12 m8 offset-m2">
          <h4 style={ styles.rule__header }>Three Strikes</h4>

          <p style={ styles.rule__details }>
            You can guess incorrectly three times. Once you've guessed over
            3 times, it's game over!
          </p>
        </div>
      </div>

      <div className="row" style={[styles.rule, styles.evenRule]}>
        <div className="col s12 m8 offset-m2">
          <h4 style={ styles.rule__header }>Skips</h4>

          <p style={ styles.rule__details }>
            You are alotted 3 skips during a game. It's impossible to know
            everything, right?
          </p>
        </div>
      </div>

      <div className="row" style={styles.btnContainer}>
        <div className="col s12 m8 offset-m2">
          <Link to="/game" style={ styles.btn }>Get Started</Link>
        </div>
      </div>
    </div>
  );
}

GameRulesComp.styles = {
  intro: {
    background: '#38acea',
    padding: '100px 0px 150px 0px',
    margin: 0
  },

  rule: {
    padding: '150px 0px 150px 0px',
    margin: 0
  },

  oddRule: {
    background: '#38ea76'
  },

  evenRule: {
    background: '#7638ea'
  },

  rule__header: {
    color: 'white'
  },

  rule__details: {
    fontSize: 18,
    color: 'white'
  },

  intro__overview: {
    color: 'white',
    marginTop: 75,
    textAlign: 'center',
    fontSize: 42,
    lineHeight: '160%'
  },

  intro__subOverview: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: '20%',
    marginRight: '20%'
  },

  btnContainer: {
    height: '30vh',
    marginTop: 100
  },

  btn: {
    padding: '30px 55px',
    background: '#38ea76',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 3
  }
}

const GameRules = Radium(GameRulesComp);
export default GameRules;
