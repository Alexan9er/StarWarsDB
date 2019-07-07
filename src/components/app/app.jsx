import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorBoundary from '../errorBoundary';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swServiceContext';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
