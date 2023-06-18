import * as actionTypes from "./actionTypes";

export type ActionType = {
  type: (typeof actionTypes)[keyof typeof actionTypes];
  payload: any;
};

export const setSelectedMenu = (id: string): ActionType => ({
  type: actionTypes.SET_SELECTED_MENU_ID,
  payload: id,
});
