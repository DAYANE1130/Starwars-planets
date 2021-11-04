import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/Api';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPlanets() {
    const planets = await fetchPlanetsApi();
    setData(planets);
    setIsLoading(false);
  }
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetContext.Provider
      value={ { data,
        setData,
        isLoading,
        setIsLoading,
        getPlanets,
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
