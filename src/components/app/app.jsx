import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';

import ErrorButton from '../errorButton';
import ErrorIndicator from '../errorIndicator';
import PeoplePage from '../peoplePage/peoplePage';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import SwapiService from '../../services/SwapiService';

export default class App extends Component {
  swapiServer = new SwapiService();

  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <ErrorIndicator />
        </div>
      );
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <ErrorButton />

        <PeoplePage />
      </div>
    );
  }
}
