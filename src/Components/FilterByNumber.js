import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumber() {
  const { handleFilterNumeric, numericFilter, handleOption,
    options, filters } = useContext(
    PlanetContext,
  );
  const { filterByNumericValues } = filters;
  const { column } = filterByNumericValues[0];
  return (
    <div>
      <label htmlFor="column-filter">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleFilterNumeric }
        >
          {options.map((option) => (
            <option key={ option }>
              {option}
            </option>
          ))}

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
        onClick={ () => { numericFilter(); handleOption(column); } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
