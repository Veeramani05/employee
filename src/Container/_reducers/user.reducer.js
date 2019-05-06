import { userConstants } from './../_constants';

const initialState = {
  empData: []
};


export const users = (state = initialState, action) => {
  const { GET_EMP_DETAILS } = userConstants;
  const { type } = action;
  switch (type) {
    case GET_EMP_DETAILS:
      return { ...state, empData: action.payload }
    default:
      return state;
  }
} 