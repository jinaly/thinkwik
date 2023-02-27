export const userActionTypes = {
  signup: "SIGNUP",
  login: "LOGIN",
  logout: "LOGOUT",
  user_list: "USER_LIST",
  add_user: "ADD_USER",
  delete_user: "DELETE_USER",
  edit_user: "EDIT_USER",
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
export const listAction = () => ({
  type: userActionTypes.user_list,
});
export const addAction = (data) => ({
  type: userActionTypes.add_user,
  payload: data,
});
export const deleteAction = (data) => ({
  type: userActionTypes.delete_user,
  payload: data,
});
export const editAction = (data) => ({
  type: userActionTypes.edit_user,
  payload: data,
});
