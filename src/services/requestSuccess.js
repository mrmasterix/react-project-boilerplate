import ActionCreator from './actionCreator';

export default (response) => {
  setTimeout(() => ActionCreator.fire('loading', false), 300);
  return response.json();
};
