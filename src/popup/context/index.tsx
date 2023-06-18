import {
  FC,
  ReactNode,
  createContext,
  useReducer,
  useContext,
  Dispatch,
} from "react";
import reducer, { InitialStateType, initialState } from "./reducer";
import { ActionType } from "./actions";

const globalContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const GlobalContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

type ContextHook = {
  state: InitialStateType;
  dispatch: (action: ActionType) => void;
};
export const useGlobalContext: () => ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};
