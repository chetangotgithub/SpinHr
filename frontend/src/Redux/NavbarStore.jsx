import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './NavbarReducer';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
