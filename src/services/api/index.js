import ApiRequest from '../apiRequest';
import methods from './methods';

export default {

  request(props) {
    return new ApiRequest(props);
  },

  ...methods,

};
