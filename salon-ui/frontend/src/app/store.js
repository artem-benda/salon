import { configureStore } from '@reduxjs/toolkit';
import { enableES5 } from 'immer';
enableES5();

export default configureStore({
  reducer: {
  },
});
