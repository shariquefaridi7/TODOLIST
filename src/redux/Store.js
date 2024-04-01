import { configureStore } from '@reduxjs/toolkit';
import toDoListSlice from './Slice/toDoListSlice';


export const store = configureStore({
  reducer: {
    todos: toDoListSlice
  },

});
