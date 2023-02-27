import { userActionTypes } from "../actions/user.action";

const initialState = {
  users: [
    { email: "jhon@gmail.com", name: "Jho", password: 1234 },
    { email: "nicols@gmail.com", name: "Nicolas", password: 5678 },
    { email: "daissy@gmail.com", name: "Daisy", password: 9101 },
  ],
  loginUser: null,
};
const infoInitialState = {
  dataSource: [
    {
      id: 0,
      name: "Jho doe",
      email: "jhon@gmail.com",
      description: "Jho doe",
    },
    {
      id: 1,
      name: "Nicolas more",
      email: "nicolas@gmail.com",
      description: "Nicolas more",
    },
    {
      id: 2,
      name: "Daisy shah",
      email: "daisy@gmail.com",
      description: "Daisy",
    },
    {
      id: 3,
      name: "Phon mor",
      email: "phonix@gmail.com",
      description: "Phon",
    },
    {
      id: 4,
      name: "More meal",
      email: "moret@gmail.com",
      description: "More",
    },
    {
      id: 5,
      name: "Carry Mol",
      email: "carry@gmail.com",
      description: "Carry",
    },
    {
      id: 10,
      name: "Ars Met",
      email: "ars@gmail.com",
      description: "Ars",
    },
  ],
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

export const userDataReducer = (state = infoInitialState, action) => {
  switch (action.type) {
    case userActionTypes.user_list:
      return {
        ...state,
        dataSource: action.payload,
      };
    case userActionTypes.add_user:
      state.dataSource.push({
        ...action.payload,
      });
      return {
        ...state,
      };
    case userActionTypes.edit_user:
      const elmIndex = state.dataSource.findIndex(
        (data) => data.id == action.payload.id
      );
      state.dataSource[elmIndex] = action.payload;
      return {
        ...state,
      };

    case userActionTypes.delete_user:
      return {
        ...state,
        dataSource: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
