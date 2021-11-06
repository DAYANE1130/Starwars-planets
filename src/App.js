import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './context/PlanetProvider';
import './App.css';
import FilterByName from './Components/FilterByName';
import FilterByNumber from './Components/FilterByNumber';

function App() {
  return (
    <PlanetProvider>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </PlanetProvider>

  );
}
export default App;
