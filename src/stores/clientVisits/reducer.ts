import { createSlice } from "@reduxjs/toolkit";

type ClientVisitsState = {
  value: number;
};

const initialState: ClientVisitsState = {
  value: 0,
};

export const clientVisitsReducer = createSlice({
  name: "clientVisits",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setToSpecificAmount: (state, action) => {
      state.value = action.payload as number;
    },
  },
});

export const { increment, decrement, incrementByAmount, setToSpecificAmount } =
  clientVisitsReducer.actions;
