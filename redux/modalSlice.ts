"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const initialState: ModalState = {
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onClickOpen: (state) => {
      state.isOpen = true;
    },
    onClickClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClickOpen, onClickClose } = modalSlice.actions;

export default modalSlice.reducer;
