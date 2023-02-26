import { userActionTypes } from "../actions/user.action";

const initialState = {
  users: [
    { email: "jhon@gmail.com", name: "Jhon", password: 1234 },
    { email: "nicols@gmail.com", name: "Nicols", password: 5678 },
    { email: "daissy@gmail.com", name: "Daissy", password: 9101 },
  ],
  loginUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.signup:
      state.users.push({
        ...action.payload,
      });
      return {
        ...state,
      };
    case userActionTypes.login:
      return {
        ...state,
        loginUser: action.payload,
      };
    case userActionTypes.logout:
      return {
        ...state,
        loginUser: null,
      };
    default:
      return state;
  }
};


export default userReducer;
