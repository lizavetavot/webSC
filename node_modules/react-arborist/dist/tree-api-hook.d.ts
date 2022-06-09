import { Dispatch } from "react";
import { FixedSizeList } from "react-window";
import { Action } from "./reducer";
import { TreeApi } from "./tree-api";
import { StateContext, TreeProviderProps } from "./types";
export declare function useTreeApi<T>(state: StateContext, dispatch: Dispatch<Action>, props: TreeProviderProps<T>, list: FixedSizeList | undefined): TreeApi<T>;
