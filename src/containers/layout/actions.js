import ActionCreator from '../../services/actionCreator';

export default () => ({
  getPost() {
    const request = fetch('https://jsonplaceholder.typicode.com/posts/1');
    request
      .then(res => res.json())
      .then(post => ActionCreator.fire('getPost', post));
  },

  load: () => ActionCreator.fire('loading', true),
  complete: () => ActionCreator.fire('loading', false),
});
