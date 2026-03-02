import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  profilePicture: ''
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    updateProfileInfo: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    updateProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { updateProfileInfo, updateProfilePicture } = adminSlice.actions;
export default adminSlice.reducer;