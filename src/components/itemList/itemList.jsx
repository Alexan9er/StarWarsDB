import React, { Component } from 'react';

import './itemList.css';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">George Lucas</li>
        <li className="list-group-item">Darth Vader</li>
      </ul>
    );
  }
}
