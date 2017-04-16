import React from 'react';
import axios from 'axios';
import Radium from 'radium';

import { Redirect } from 'react-router-dom';

const styles = {
  option: {
    textAlign: 'center',
    background: '#006699',
    color: 'white',

   ':hover': {
     boxShadow: '0 12px 27px rgba(0,0,0,0.16), 0 12px 27px rgba(0,0,0,0.23)',
     cursor: 'pointer'
   },
  }
}

class SelectSpecies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: ''
    }

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    const species = {
      "birds": "bird",
      "plants": "plant",
      "fish": "fish",
      "insects": "insect",
      "snakes": "snake",
      "spiders": "spider"
    }

    const speciesSingular = species[event.target.innerHTML.toLowerCase()];
    const speciesPlural = event.target.innerHTML.toLowerCase();

    axios.get(`http://api.inaturalist.org/v1/taxa/autocomplete?q=${speciesSingular}&per_page=30`)
        .then((res) => {
          const choicesRepo = [];
          const questionsRepo = [];

          // started at 2 b/c first two are extremely general names
          for (let i = 2; i < res.data.results.length; i++) {
            if (res.data.results[i].preferred_common_name !== undefined) {
              choicesRepo.push(res.data.results[i].preferred_common_name);
              questionsRepo.push({
                img: res.data.results[i].default_photo.medium_url,
                answer: res.data.results[i].preferred_common_name
              });
            }
          }


          this.props.setInitialGameState(
            speciesSingular,
            speciesPlural,
            choicesRepo,
            questionsRepo
          );
        })
        .then(() => {
          this.setState({ redirect: '/rules' });
        })
        .catch((err) => {
          return err;
        })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }

    return (
      <div className="row">
        <ul>
          <li>
            <div style={styles.option} key="1" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Birds</h2>
            </div>
          </li>

          <li>
            <div style={styles.option} key="2" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Plants</h2>
            </div>
          </li>

          <li>
            <div style={styles.option} key="3" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Fish</h2>
            </div>
          </li>

          <li>
            <div style={styles.option} key="4" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Insects</h2>
            </div>
          </li>

          <li>
            <div style={styles.option} key="5" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Snakes</h2>
            </div>
          </li>

          <li>
            <div style={styles.option} key="6" className="col s12 m4" onClick={this.handleSelection}>
              <h2>Spiders</h2>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium( SelectSpecies );
