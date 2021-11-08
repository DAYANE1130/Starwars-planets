import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumber() {
  const { handleFilterNumeric, numericFilter } = useContext(PlanetContext);

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleFilterNumeric }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>

        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilterNumeric }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          placeholder="Insira aqui o numero"
          onChange={ handleFilterNumeric }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => numericFilter() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
