import { userConstants } from '../_constants';


const initialState = { email: "", password: "" };

export const authentication = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userConstants.SET_USERNAME:
      return { ...state, email: payload };
    case userConstants.SET_PASSWORD:
      return { ...state, password: payload };
    default:
      return state
  }
} 