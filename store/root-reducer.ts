import { combineReducers } from "@reduxjs/toolkit";
import accessTokenSlice from "../store/slices/auth_slice/login_slice"
const appReducer = combineReducers({
  accessTokenSlice:accessTokenSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "Login/LogoutSuccess") {
    state = undefined;

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;