import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import notificationReducer from './slices/notificationSlice';
import wishlistReducer from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    notifications: notificationReducer,
    wishlist: wishlistReducer,
  },
});
