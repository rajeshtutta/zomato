import { LOGIN_SUCCESS, LOGOUT } from "./authTypes";

const user = JSON.parse(localStorage.getItem("zomatoUser"));

const initialState = {
  isAuth: !!user,
  user: user || null,
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("zomatoUser");

      return {
        ...state,
        isAuth: false,
        user: null,
      };

    default:
      return state;
  }
};
