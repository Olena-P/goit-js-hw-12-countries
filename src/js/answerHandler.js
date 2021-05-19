import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';
import fetchCountries from './fetchCountries.js';
import refs from './refs.js';
import alerts from './alert.js';

function answerHandlerInput(input) {
  fetchCountries(input).then(array => {
    if (array === undefined) {
      alerts.errorNotFound();
    } else if (array.length > 10) {
      alerts.errorManyResults();
    } else if (array.length === 1) {
      refs.div.innerHTML = countryCard(array);
    } else {
      refs.div.innerHTML = countryList(array);
    }
  });
}
export default answerHandlerInput;
