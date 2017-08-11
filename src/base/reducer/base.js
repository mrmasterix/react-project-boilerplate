export default class BaseReducer {
  getNewState() {
    throw Error('Base Reducer should be overwritten.');
  }
}
