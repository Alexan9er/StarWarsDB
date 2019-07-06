import React from 'react';
import ItemList from '../itemList';
import { withData } from '../hocHelpers';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanes, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => props => (
  <Wrapped {...props}>{fn}</Wrapped>
);

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndBirthYear = ({ name, birthYear }) => (
  <span>
    {name}, ({birthYear})
  </span>
);

const PersonList = withData(
  withChildFunction(ItemList, renderNameAndBirthYear),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanes
);
const StarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
