import { XYCoord } from "react-dnd";
import { Node } from "../types";
import { DropResult } from "./drop-hook";
declare type Args = {
    element: HTMLElement;
    offset: XYCoord;
    indent: number;
    node: Node | null;
    prevNode: Node | null;
    nextNode: Node | null;
};
export declare type ComputedDrop = {
    drop: DropResult | null;
    cursor: Cursor | null;
};
declare function lineCursor(index: number, level: number): {
    type: "line";
    index: number;
    level: number;
};
declare function noCursor(): {
    type: "none";
};
declare function highlightCursor(id: string): {
    type: "highlight";
    id: string;
};
export declare type LineCursor = ReturnType<typeof lineCursor>;
export declare type NoCursor = ReturnType<typeof noCursor>;
export declare type HighlightCursor = ReturnType<typeof highlightCursor>;
export declare type Cursor = LineCursor | NoCursor | HighlightCursor;
/**
 * This is the most complex, tricky function in the whole repo.
 * It could be simplified and made more understandable.
 */
export declare function computeDrop(args: Args): ComputedDrop;
export {};
