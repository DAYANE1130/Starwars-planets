import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/Api';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: 0,
        },
      ],
    },
  );

  async function getPlanets() {
    const planets = await fetchPlanetsApi();
    setData(planets);
    setIsLoading(false);
  }

  async function planetFilter(name) {
    if (name.length > 0) {
      const nameFiltered = data
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
      setDataFiltered(nameFiltered);
    } else {
      const respostaApi = await fetchPlanetsApi();
      setDataFiltered(respostaApi);
    }
  //   setIsLoading(false);
  }

  useEffect(() => {
    getPlanets();
    planetFilter('');
  }, []);

  const handleFilterName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
    planetFilter(value);
  };

  // function planetFilter() {
  //   const { filterByName: { name } } = filters;
  //   if (name.length > 0) {
  //     const nameFilter = data
  //       .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  //     return nameFilter;
  //   }
  //   return data;
  // }

  const handleFilterNumeric = (event) => {
    const { name, value } = event.target;
    setFilters(
      { filterByNumericValues: [{ ...filters.filterByNumericValues[0], [name]: value }] },
    );
  };

  return (
    <PlanetContext.Provider
      value={ { data,
        setData,
        isLoading,
        setIsLoading,
        getPlanets,
        handleFilterName,
        filters,
        handleFilterNumeric,
        dataFiltered,
        setDataFiltered,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
