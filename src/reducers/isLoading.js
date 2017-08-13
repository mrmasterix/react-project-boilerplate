import BaseReducer from '../base/reducer/base';
import ReducerStorage from '../base/reducer/storage';
import { IS_LOADING } from '../constants/actions/common';

class IsLoading extends BaseReducer {

  getNewState(state = false, action) {
    if (action.type === IS_LOADING) {
      return action.payload.isLoading || action.payload;
    }
    return state;
  }

}

ReducerStorage.addReducer('isLoading', new IsLoading());
