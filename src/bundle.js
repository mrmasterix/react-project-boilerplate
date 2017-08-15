import '../img/favicon.png';
import './global';
import './actions';
import './reducers';
import App from './app';

import ApiRequest from './services/request';
window.ApiRequest = ApiRequest;
App.run();
