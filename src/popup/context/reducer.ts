import { Reducer } from "react";
import { ActionType } from "./actions";
import { SET_SELECTED_MENU_ID } from "./actionTypes";

export type InitialStateType = {
  selectedMenuId: string;
};

export const initialState: InitialStateType = {
  selectedMenuId: "autoComment",
};

const reducer: Reducer<InitialStateType, ActionType> = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_MENU_ID:
      return {
        ...state,
        selectedMenuId: action.payload,
      };
  }
};

export default reducer;
