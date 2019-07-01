import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import PlanetView from './planetView';
import ErrorIndicator from '../errorIndicator';
import './randomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };

    this.updatePlanet();
  }

  onPlanetLoad = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoad)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasDate = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasDate ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}
