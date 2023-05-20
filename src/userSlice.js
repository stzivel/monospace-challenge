import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// Define the async thunk for fetching table data
export const fetchTableData = createAsyncThunk('users/fetchTableData', async () => {
  try {
    const response = await axios.get('https://spiros.users.challenge.dev.monospacelabs.com/users');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch table data.');
  }
});

// Define the async thunk for updating toggle status
export const updateToggleStatus = createAsyncThunk(
  'users/updateToggleStatus',
  async ({ userId, toggleStatus }) => {
    try {
      const response = await axios.put(
        `https://spiros.users.challenge.dev.monospacelabs.com/users/${userId}`,
        { active: toggleStatus }
      );
      return response.data;
    } catch (error) {
      throw Error('Failed to update toggle status.');
    }
  }
);

// Create the users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateToggleStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateToggleStatus.fulfilled, (state, action) => {
        const { userId, toggleStatus } = action.payload;
        const user = state.users.find((user) => user.id === userId);
        if (user) {
          user.active = toggleStatus; // Update the user's active value
        }
        state.isLoading = false;
      })
      .addCase(updateToggleStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

  },
});



export default usersSlice.reducer; // Export the slice 
