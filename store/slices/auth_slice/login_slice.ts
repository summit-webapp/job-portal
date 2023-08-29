import getAccessTokenApi from '@/services/api/auth_api/login_api';
import useAccessTokenMutation from '@/services/api/auth_api/login_api';
import { RootState } from '@/store/root-reducer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Create an async thunk for fetching access token
export const fetchAccessToken = createAsyncThunk(
  'accessToken/fetchAccessToken',
  async ({ usr, pwd }:any) => {
    console.log('Fetching access token...');
    const response = await getAccessTokenApi(usr , pwd);
    console.log('Access token response:', response);
    return response;
  }
);
interface AuthState {
    token: any;
    user:any
    isLoading: boolean;
    error: string;
}

const initialState: AuthState = {
    token: '',
    user:'',
    isLoading: false,
    error: '',
};

const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    ClearToken(state?: any) {
      state.token = "";
      state.error = "";
      state.isLoading = true;
      state.user = "";
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state:any) => {
        state.isLoading = true;
        state.error =  "";
        state.token =  "";
        state.user = "";
      })
      .addCase(fetchAccessToken.fulfilled, (state?:any, action?:any) => {
        if (action?.payload?.hasOwnProperty("access_token")) {
          state.token = action?.payload?.access_token;
          localStorage.setItem("LoggedIn", "true");
          state.user = "LoggedIn";
          console.log("token in slice",state.token)
          console.log("token in user",state.user)
        }
        state.isLoading = false;
      })
      .addCase(fetchAccessToken.rejected, (state:any , action?:any) => {
        state.isLoading = true;
        state.error =  action?.payload;
      });
  },
});

//add data to store
export const get_access_token = (state: RootState) =>
  state.accessTokenSlice;

// Export the actions and reducer
export const {ClearToken } = accessTokenSlice.actions; // Add any actions you want to export
export default accessTokenSlice.reducer;
