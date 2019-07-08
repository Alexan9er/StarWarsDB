import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorBoundary from '../errorBoundary';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swServiceContext';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />

              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <h2>Welcome to StarWarsDB</h2>}
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets/" component={PlanetsPage} />
                <Route path="/starships/" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
