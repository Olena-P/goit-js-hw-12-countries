import refs from './refs';
import debounce from 'lodash.debounce';
import answerHandlerInput from './answerHandler';

refs.input.addEventListener(
  'input',
  debounce(e => {
    answerHandlerInput(e.target.value);
  }, 500),
);
