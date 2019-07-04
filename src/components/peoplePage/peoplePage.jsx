import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import Row from '../row';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import ErrorBoundary from '../errorBoundary';

import './peoplePage.css';

export default class PeoplePage extends Component {
  swapiServer = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiServer.getAllPeople}
        renderItem={item => `${item.name}, (${item.birthYear})`}
      />
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
