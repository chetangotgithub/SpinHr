import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: {
    home: true,
    leaves: false,
    holidays: false,
    salary: false,
    attandance: false,
    validateUser: null,
  },
};

// Thunk action for async validateUser
export const validateUserAsync = createAsyncThunk(
  'navbar/validateUser',
  async (payload, { rejectWithValue }) => {
    try {
      console.log('payload ', payload);
      const response = await axios.post(
        'http://localhost:3000/leaves/add',
        payload
      );
      return response.data.response._id; // Pass only _id to the reducer
    } catch (error) {
      console.error('Error validating user:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const counterSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    leaves: (state) => {
      state.value = {
        ...state.value,
        home: false,
        leaves: true,
        holidays: false,
        salary: false,
        attandance: false,
      };
    },
    holidays: (state) => {
      state.value = {
        ...state.value,
        home: false,
        leaves: false,
        holidays: true,
        salary: false,
        attandance: false,
      };
    },
    salary: (state) => {
      state.value = {
        ...state.value,
        home: false,
        leaves: false,
        holidays: false,
        salary: true,
        attandance: false,
      };
    },
    home: (state) => {
      state.value = {
        ...state.value,
        home: true,
        leaves: false,
        holidays: false,
        salary: false,
        attandance: false,
      };
    },
    attandance: (state) => {
      state.value = {
        ...state.value,
        home: false,
        leaves: false,
        holidays: false,
        salary: false,
        attandance: true,
      };
    },
    logout: (state) => {
      state.value = {
        ...state.value,
        validateUser: null,
      };
    },
  },

  // Add an extra reducer to handle async state updates for validateUser
  extraReducers: (builder) => {
    builder
      .addCase(validateUserAsync.fulfilled, (state, action) => {
        state.value.validateUser = action.payload;
      })
      .addCase(validateUserAsync.rejected, (state, action) => {
        state.value.validateUser = null; // Or handle error in state as needed
      });
  },
});

// Export actions
export const { leaves, holidays, salary, home, logout, attandance } =
  counterSlice.actions;
export default counterSlice.reducer;
