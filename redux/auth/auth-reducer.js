import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  login: null,
  email: null,
  avatarURL: null,
};

const actions = {
  updateUserProfile: (state, { payload }) => {
    return {
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
      avatarURL: payload.avatarURL,
    };
  },

  authLogOut: () => initialState,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: actions,
});
