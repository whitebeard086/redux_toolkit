import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Zion Williamson" },
  { id: "1", name: "Luka Doncic" },
  { id: "2", name: "Trae Young" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;
