import refs from './refs.js';

function fetchCountries(countryName) {
  clearDiv();
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
}

function clearDiv() {
  refs.div.innerHTML = '';
}

export default fetchCountries;
