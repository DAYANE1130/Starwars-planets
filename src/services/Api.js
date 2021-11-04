const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsApi() {
  const fetchPlanet = await fetch(URL);
  const resposta = await fetchPlanet.json();
  const { results } = resposta;
  return results.filter((planet) => delete planet.residents);
}

// fetchPlanetsApi();

export default fetchPlanetsApi;
