import { SIGNUP, LOGIN_USER } from "../Actions/types";
const initialState = {
  token: {},
  authenticated: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
    console.log("Inside reducer login", action.payload);
    if(action.payload){
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
}
