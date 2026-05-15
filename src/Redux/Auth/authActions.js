import { LOGIN_SUCCESS, LOGOUT } from "./authTypes";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
