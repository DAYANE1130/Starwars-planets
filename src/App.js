import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './context/PlanetProvider';
import './App.css';
import FilterByName from './Components/FilterByName';
import FilterByNumber from './Components/FilterByNumber';
import RemoveFilter from './Components/RemoveFilter';

function App() {
  return (
    <PlanetProvider>
      <FilterByName />
      <FilterByNumber />
      <RemoveFilter />
      <Table />
    </PlanetProvider>

  );
}
export default App;
