import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';

import ErrorButton from '../errorButton';
import ErrorIndicator from '../errorIndicator';
import PeoplePage from '../peoplePage/peoplePage';

export default class App extends Component {
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
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
