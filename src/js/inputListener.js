import refs from './refs';
import debounce from 'lodash.debounce';
import responseHandlerInput from './responseHandler';

refs.input.addEventListener(
  'input',
  debounce(e => {
    responseHandlerInput(e.target.value);
  }, 500),
);
