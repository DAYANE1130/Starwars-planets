import React, { useContext } from 'react';
import { Table as Tablestrap } from 'react-bootstrap';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading, dataFiltered } = useContext(PlanetContext);

  if (isLoading === true) return <p>CARREGANDO...</p>;
  return (
    <section>
      <Tablestrap striped bordered hover>
        {/* <table> */}
        <thead>
          <tr>
            {Object.keys(data[0]).map((header) => (
              <th key={ header }>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet) => (
            <tr key={ planet.name }>
              <td>
                { planet.name }
              </td>
              <td>
                {planet.rotation_period}
              </td>
              <td>
                {planet.orbital_period}
              </td>
              <td>
                {planet.diameter}
              </td>
              <td>
                {planet.climate}
              </td>
              <td>
                {planet.gravity}
              </td>
              <td>
                {planet.terrain}
              </td>
              <td>
                {planet.surface_water}
              </td>
              <td>
                {planet.population}
              </td>
              <td>
                {planet.films}
              </td>
              <td>
                {planet.created}
              </td>
              <td>
                {planet.edited}
              </td>
              <td>
                {planet.url}
              </td>
            </tr>
          ))}
        </tbody>
        {/* </table> */}
      </Tablestrap>
    </section>

  );
}

export default Table;
