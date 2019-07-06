import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import Row from '../row';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorBoundary from '../errorBoundary';

import './peoplePage.css';

export default class PeoplePage extends Component {
  swapiServer = new SwapiService();

  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiServer.getAllPeople}
        renderLabel={item => `${item.name}, (${item.birthYear})`}
      />
    );

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
