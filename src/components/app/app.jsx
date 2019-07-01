import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import PersonDetails from '../personDetails';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row">
          <div className="col-lg-5">
            <ItemList />
          </div>
          <div className="col-lg-7">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
