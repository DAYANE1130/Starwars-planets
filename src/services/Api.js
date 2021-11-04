const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsApi() {
  const fetchPlanet = await fetch(URL);
  const resposta = await fetchPlanet.json();
  resposta.results.filter((planet) => delete planet.residents);
  console.log(resposta);
  return resposta;
}

// fetchPlanetsApi();

export default fetchPlanetsApi;
