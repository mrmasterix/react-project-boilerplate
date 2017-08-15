import ActionCreator from '../../services/actionCreator';

export default () => ({
  helloMessage: (e) => {
    e.preventDefault();
    return ActionCreator.fire('helloMessage', e.target.message.value || 'Hello message!');
  },
});
