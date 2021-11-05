import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './context/PlanetProvider';
import './App.css';
import FilterByName from './Components/FilterByName';

function App() {
  return (
    <div>
      <PlanetProvider>
        <FilterByName />
        <Table />
      </PlanetProvider>
    </div>
  );
}
export default App;
