import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
} from '../actions';

const login = (state = {}, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default login;
