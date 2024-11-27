import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reviews: [
    {
      id: 1,
      username: "JohnDoe",
      rating: 4.5,
      comment: "Great service, highly recommend!",
    },
    {
      id: 2,
      username: "JaneSmith",
      rating: 3.0,
      comment: "The service was okay, but could be improved.",
    },
    {
      id: 3,
      username: "AlexJohnson",
      rating: 5.0,
      comment: "Absolutely fantastic! Best experience ever.",
    },
    {
      id: 4,
      username: "EmilyClark",
      rating: 2.5,
      comment: "Not as good as I expected. Needs more work.",
    },
    {
      id: 5,
      username: "ChrisLee",
      rating: 4.0,
      comment: "Pretty good, but there’s room for improvement.",
    },
  ],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
    removeReview(state, action) {
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
    },
  },
});

export const { addReview, removeReview } = reviewSlice.actions;

export default reviewSlice.reducer;
