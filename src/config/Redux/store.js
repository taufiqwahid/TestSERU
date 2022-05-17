const {createStore} = require('redux');

const initialState = {
  loading: false,
  numberStepActive: 0,
  stepCompleted: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value,
      };

    case 'SET_STEPACTIVE':
      return {
        ...state,
        numberStepActive: action.value,
      };

    case 'SET_STEP_COMPLETED':
      return {
        ...state,
        stepCompleted: action.value,
      };
  }
  return state;
};

const store = createStore(reducer);

export default store;
