import BaseReducer from '../base/reducer/base';
import ReducerStorage from '../base/reducer/storage';
import { COMPONENT_LOADING } from '../constants/actions/common';
import SmartObject from '../services/smartObject';

class ComponentLoading extends BaseReducer {

  getNewState(state, action) {
    if (action.type === COMPONENT_LOADING) {
      const { isLoading } = action.payload.isLoading || action.payload;
      return SmartObject.modify(state, { isLoading });
    }
    return state;
  }

}

ReducerStorage.addReducer('ComponentLoading', new ComponentLoading());
