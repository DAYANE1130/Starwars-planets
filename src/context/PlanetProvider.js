import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/Api';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //  useEffect(() => {
  //   fetchPlanetsApi();
  // }, []);

  async function getPlanets() {
    setIsLoading(true);
    const planets = await fetchPlanetsApi();
    console.log(planets);
    setData(planets);
    setIsLoading(false);
  }

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
