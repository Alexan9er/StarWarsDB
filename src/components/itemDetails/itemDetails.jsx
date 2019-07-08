import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

import './itemDetails.css';

const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export { Record };

export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      image: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }
    this.setState({ loading: true });

    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item), loading: false });
    });
  }

  render() {
    const { item, loading, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = item;

    const itemView = (
      <React.Fragment>
        <img className="item-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child =>
              React.cloneElement(child, { item }))}
          </ul>
        </div>
      </React.Fragment>
    );

    const content = loading ? <Spinner /> : itemView;

    return <div className="item-details card">{content}</div>;
  }
}

ItemDetails.propTypes = {
  itemId: PropTypes.string,
  children: PropTypes.node.isRequired,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
};

ItemDetails.defaultProps = {
  itemId: null,
};
