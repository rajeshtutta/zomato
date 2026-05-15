import {
  LOGIN_SUCCESS,
  LOGOUT,
} from "./authTypes";

const user =
  JSON.parse(
    localStorage.getItem("zomatoUser")
  );

const initialState = {
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
