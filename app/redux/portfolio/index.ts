import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Portfolio {
  comment: string[];
  like: string[];
}

const initialState: Portfolio = {
  like: [],
  comment: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLike: (state, action: PayloadAction<Portfolio>) => {
      state.like = action.payload?.like;
    },
    setComment: (state, action: PayloadAction<Portfolio>) => {
      state.comment = action.payload?.comment;
    },
  },
});

export const { setLike, setComment } = portfolioSlice.actions;
export default portfolioSlice.reducer;
