import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    nickname: '',
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      const { email, nickname } = action.payload;
      state.email = email;
      state.nickname = nickname;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = '';
      state.nickname = '';
      state.isLoggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer