import { configureStore } from '@reduxjs/toolkit';
import RewriteSlice from './features/rewrite.slice';
export const store = configureStore({
  reducer: {
    RewriteSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
