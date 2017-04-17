import React from 'react';
import axios from 'axios';
import Radium from 'radium';

import { Redirect } from 'react-router-dom';

const styles = {
  header: {
    color: '#38acea',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 60,
    marginTop: 75,
    marginBottom: 75
  },

  overview: {
    textAlign: 'center',
    marginBottom: 75,
    fontSize: 18
  },

  option: {
    textAlign: 'center',
    height: 350,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

   ':hover': {
     boxShadow: '0 3px 68px rgba(0,0,0,0.16), 0 3px 68px rgba(0,0,0,0.23)',
     cursor: 'pointer'
   },
  },

  birds: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(http://www.boldsky.com/img/2014/11/12-birds1.jpg)',
    backgroundSize: 'cover'
  },

  plants: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(http://www.naturallivingideas.com/wp-content/uploads/2016/03/Birds-of-Paradise.jpg)',
    backgroundSize: 'cover'
  },

  fish: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(https://www.enkivillage.org/s/upload/images/2014/12/6b763ab291172be76ba271a0829d2c66.jpg)',
    backgroundSize: 'cover'
  },

  insects: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(http://www.worthwhilesmile.com/wp-content/uploads/2012/06/insect3.jpg)',
    backgroundSize: 'cover'
  },

  snakes: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(https://s-media-cache-ak0.pinimg.com/736x/5c/9c/82/5c9c82a8f6acf7efd6a6d7ba2a20bdaa.jpg)',
    backgroundSize: 'cover'
  },

  spiders: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(http://holeintheclouds.net/sites/holeintheclouds.net/files/good_morning/13jan/spidey.jpg)',
    backgroundSize: 'cover'
  }
}

class SelectSpecies extends React.Component {
  constructor(props) {
    super(props);

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
      .catch((err) => {
        return err;
      })
  }

  render() {
    if (this.props.selectedSpecies) {
      return <Redirect to="/rules" />
    }

    return (
      <div className="container">
        <div className="row">
          <h2 style={[styles.header]}>Welcome to Quizly</h2>
          <p style={[styles.overview]}>Think you know a thing or two about biodiversity?
            Select one of the species below to prove it.
          </p>

          <ul>
            <li>
              <div style={[styles.option, styles.birds]} key="1" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Birds</h2>
              </div>
            </li>

            <li>
              <div style={[styles.option, styles.plants]} key="2" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Plants</h2>
              </div>
            </li>

            <li>
              <div style={[styles.option, styles.spiders]} key="6" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Spiders</h2>
              </div>
            </li>

            <li>
              <div style={[styles.option, styles.fish]}key="3" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Fish</h2>
              </div>
            </li>

            <li>
              <div style={[styles.option, styles.insects]} key="4" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Insects</h2>
              </div>
            </li>

            <li>
              <div style={[styles.option, styles.snakes]} key="5" className="col s12 m6" onClick={this.handleSelection}>
                <h2>Snakes</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Radium( SelectSpecies );
