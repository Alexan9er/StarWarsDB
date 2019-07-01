import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import PlanetView from './planetView';
import './randomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();

    this.state = {
      planet: {},
      loading: true,
    };

    this.updatePlanet();
  }

  onPlanetLoad = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoad);
  }

  render() {
    const { planet, loading } = this.state;
    const content = loading ? <Spinner /> : <PlanetView planet={planet} />;

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}
