import { configureStore } from "@reduxjs/toolkit";
import { BlogApi } from "../Features/BlogFeture/BlogApi";
import reviewSlice from "../Features/ReviewFeature/reviewSlice"; // Import your review slice

const store = configureStore({
  reducer: {
    // Add the API reducer for Blog API
    [BlogApi.reducerPath]: BlogApi.reducer,
    // Add the reviews reducer
    reviews: reviewSlice.reducer, // Access the reducer from reviewSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BlogApi.middleware), // Concatenate BlogApi middleware
});

export default store;
