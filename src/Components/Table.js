import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, setData, isLoading, filters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;

  useEffect(() => {
    const nameFilter = data.filter((planet) => planet.name.includes(name));
    setData(nameFilter);
    console.log(nameFilter);
  }, [name]);

  if (isLoading === true) return <p>CARREGANDO...</p>;
  // if (name.length !==0 ) return
  return (
    <section>
      <table>
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
          {data.map((planet) => (
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
                {planet.climate}
              </td>
              <td>
                {planet.diameter}
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
      </table>
    </section>

  );
}

export default Table;
