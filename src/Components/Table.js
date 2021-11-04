import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading } = useContext(PlanetContext);

  console.log('data', data);

  if (isLoading === true) return <p>CARREGANDO...</p>;

  return (

    <section>

      <table>
        {data.map((planet) => (
          <tr key={ planet.name }>
            {planet.name}
          </tr>
        ))}

      </table>
    </section>
  );
}

export default Table;
