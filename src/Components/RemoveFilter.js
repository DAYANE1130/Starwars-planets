import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function RemoveFilter() {
  const { removeFilterColumn, filters } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;
  return (
    <div>
      <section>

        {filterByNumericValues.map(
          ({ column, comparison, value }) => (
            <div key={ column }>
              <p>
                {column}
                {comparison}
                {value}
              </p>
              <button
                type="button"
                onClick={ () => removeFilterColumn(column) }
              >
                X
              </button>
            </div>
          ),
        )}
      </section>
    </div>
  );
}

export default RemoveFilter;
