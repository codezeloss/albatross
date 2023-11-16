"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CartState {}

const initialState: CartState = {};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = taskSlice.actions;

export default taskSlice.reducer;
