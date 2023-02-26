export const userActionTypes = {
  signup: "SIGNUP",
  login: "LOGIN",
  logout: "LOGOUT",
  
};
export const signupAction = (data) => ({
  type: userActionTypes.signup,
  payload: data,
});
export const loginAction = (data) => ({
  type: userActionTypes.login,
  payload: data,
});
export const logoutAction = () => ({
  type: userActionTypes.logout,
});
