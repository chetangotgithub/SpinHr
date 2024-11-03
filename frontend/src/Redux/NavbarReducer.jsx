import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    home: true,
    leaves: false,
    holidays: false,
    salary: false,
  },
};

export const counterSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    leaves: (state) => {
      state.value = {
        home: false,
        leaves: true,
        holidays: false,
        salary: false,
      };
    },
    holidays: (state) => {
      state.value = {
        home: false,
        leaves: false,
        holidays: true,
        salary: false,
      };
    },
    salary: (state) => {
      state.value = {
        home: false,
        leaves: false,
        holidays: false,
        salary: true,
      };
    },
    home: (state) => {
      state.value = {
        home: true,
        leaves: false,
        holidays: false,
        salary: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { leaves, holidays, salary, home } = counterSlice.actions;

export default counterSlice.reducer;
