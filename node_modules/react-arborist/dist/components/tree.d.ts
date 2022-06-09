import { ReactElement } from "react";
import { TreeApi } from "../tree-api";
import { IdObj, TreeProps } from "../types";
export declare const Tree: <T extends IdObj>(props: TreeProps<T> & import("react").RefAttributes<TreeApi<T>>) => ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
