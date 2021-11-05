import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { handleFilterName } = useContext(PlanetContext);

  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterName }
      />
    </label>
  );
}

export default FilterByName;
