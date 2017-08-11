import PureReducer from '../../base/reducer/pure';
import ReducerStorage from '../../base/reducer/storage';

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const nState = ReducerStorage.getNewState(state, action);
  console.log(nState);
  return nState;
};

PureReducer.register('Layout', reducer);
