import React, { useContext } from 'react';
import { Table as Tablestrap } from 'react-bootstrap';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);

  // useEffect(() => {
  //   getPlanets();
  // }, []);

  console.log(data);
  // info do data chega ok no provider, aqui chega vazio e se uso o effect dá loop
  // if (data === undefined) return <p>CARREGANDO...</p>;

  return (

    <section>

      <Tablestrap striped bordered hover>
        {/* {data.results.filter((planet) => (
          <th key={ planet.name }>
            {planet.name}
          </th>
        ))} */}

        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>

      </Tablestrap>
    </section>
  );
}

export default Table;
