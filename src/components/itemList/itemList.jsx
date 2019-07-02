import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import './itemList.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {
      peopleList: null,
    };
  }

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => (
      <li
        className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)}
        role="presentation"
      >
        {name}
      </li>
    ));
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const people = this.renderItems(peopleList);

    return <ul className="item-list list-group">{people}</ul>;
  }
}
