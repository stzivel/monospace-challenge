import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});



export default store;