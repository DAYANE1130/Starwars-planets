import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './context/PlanetProvider';
import './App.css';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Table />
      </PlanetProvider>
    </div>
  );
}
export default App;
