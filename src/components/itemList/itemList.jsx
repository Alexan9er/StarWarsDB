import React, { Component } from 'react';
import Spinner from '../spinner';

import './itemList.css';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemList: null,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
          role="presentation"
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const people = this.renderItems(itemList);

    return <ul className="item-list list-group">{people}</ul>;
  }
}
