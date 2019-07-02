import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import PersonView from './personView';
import './personDetails.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {
      person: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }
    this.setState({ loading: true });

    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person, loading: false });
    });
  }

  render() {
    const { person, loading } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const content = loading ? (
      <Spinner />
    ) : (
      <PersonView person={person} personId={this.props.personId} />
    );

    return <div className="person-details card">{content}</div>;
  }
}
