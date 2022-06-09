import { RefObject } from "react";
import { ConnectDropTarget } from "react-dnd";
import { Node } from "../types";
export declare type DropResult = {
    parentId: string | null;
    index: number;
};
export declare type CollectedProps = undefined;
export declare function useDropHook(el: RefObject<HTMLElement | null>, node: Node, prev: Node | null, next: Node | null): [CollectedProps, ConnectDropTarget];
