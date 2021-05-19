import refs from './refs.js';

function fetchCountries(countryName) {
  refs.div.innerHTML = '';
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
