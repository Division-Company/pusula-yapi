import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redux/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
