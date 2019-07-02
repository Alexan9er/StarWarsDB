import React, { Component } from 'react';

import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import './peoplePage.css';
import ErrorIndicator from '../errorIndicator';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

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
      <div className="row">
        <div className="col-lg-5">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-lg-7">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
