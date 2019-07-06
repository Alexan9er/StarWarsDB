import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';

import ErrorButton from '../errorButton';
import ErrorBoundary from '../errorBoundary';

import PeoplePage from '../peoplePage/peoplePage';

import SwapiService from '../../services/SwapiService';
import Row from '../row';

import { SwapiServiceProvider } from '../swServiceContext';

import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            {/* <RandomPlanet />
        <ErrorButton /> */}

            {/* <PeoplePage /> */}

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={8} />
            <StarshipDetails itemId={11} />

            <PersonList />
            <StarshipList />
            <PlanetList />

            {/* <ErrorBoundary>
          <Row left={personDetails} right={starshipDetails} />
        </ErrorBoundary> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
