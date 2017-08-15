import 'whatwg-fetch';
import exception from './exception';
import handleErrors from './handleErrors';
import handleSuccess from './requestSuccess';
import queryString from './generateQuery';
import ActionCreator from './actionCreator';

const defaultHeaders = new Headers({
  'content-type': 'application/json',
});

export default class Request {

  constructor(props) {
    this.defineParams(props);
    const requestParams = this.getRequestParams();
    return this.sendRequest(this.url, requestParams);
  }

  defineParams(props) {
    this.url = props.url || envConfig.apiUrl;
    this.endpoint = props.endpoint || '';
    this.method = props.method || 'get';
    this.data = props.data || {};
    this.method = this.method.toLowerCase();
    this.credentials = props.credentials || 'include';
    this.headers = props.headers || defaultHeaders;
  }

  sendRequest(url, params) {
    ActionCreator.fire('loading', true);
    return fetch(url, params)
      .then(handleErrors)
      .then(handleSuccess, exception);
  }

  isFormData() {
    return this.data.formData && this.data.formData instanceof FormData;
  }

  getRequestParams() {
    return this.isFormData() ? this.getFormParams() : this.getBodyParams();
  }

  addHeaders(headers) {
    this.headers = {
      ...this.headers,
      ...headers,
    };

    return this.headers;
  }

  getOptions() {
    return {
      credentials: this.credentials,
      headers: this.headers,
    };
  }

  initParams() {
    const options = this.getOptions();
    return {
      ...options,
    };
  }

  addData(params, data) {
    const paramsLink = params;
    if (this.method !== 'get') {
      paramsLink.body = JSON.stringify(data || {});
    }
    return paramsLink;
  }

  getBodyParams() {
    const params = this.initParams();
    const data = this.data;
    params.method = this.method;
    this.addQuery(data.query);
    this.addData(params, data);
    return params;
  }

  getFormParams() {
    const params = this.initParams();
    const data = this.data;
    params.method = this.method;
    this.addQuery(data.query);
    params.body = data.formData;
    return params;
  }

  addQuery(query) {
    if (query) {
      const queryParams = this.generateQuery(query);
      delete this.data.query;
      this.url = `${this.url}/${this.endpoint}?${queryParams}`;
    } else {
      this.url = `${this.url}/${this.endpoint}${this.method === 'get' ? '' : '/'}`;
    }
  }

  createUrl(queryParams) {
    const query = queryParams ? `?${queryParams}` : '';
    this.url = `${this.url}/${this.endpoint}${query}`;
  }

  generateQuery(queryParams) {
    const queryObj = {};
    Object.keys(queryParams).forEach((queryName) => {
      queryObj[queryName] = queryParams[queryName];
    });
    return queryString(queryObj);
  }

}
