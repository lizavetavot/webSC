import { Dispatch } from "react";
import { FixedSizeList } from "react-window";
import { Cursor } from "./dnd/compute-drop";
import { Action } from "./reducer";
import { Node, StateContext, TreeProviderProps, EditResult } from "./types";
export declare class TreeApi<T = unknown> {
    dispatch: Dispatch<Action>;
    state: StateContext;
    props: TreeProviderProps<T>;
    list: FixedSizeList | undefined;
    private edits;
    constructor(dispatch: Dispatch<Action>, state: StateContext, props: TreeProviderProps<T>, list: FixedSizeList | undefined);
    assign(dispatch: Dispatch<Action>, state: StateContext, props: TreeProviderProps<T>, list: FixedSizeList | undefined): void;
    getNode(id: string): Node<unknown> | null;
    getSelectedIds(): string[];
    edit(id: string | number): Promise<EditResult>;
    submit(id: string | number, value: string): void;
    reset(id: string | number): void;
    private resolveEdit;
    select(index: number | null, meta?: boolean, shift?: boolean): void;
    selectById(id: string | number, meta?: boolean, shift?: boolean): void;
    selectUpwards(shiftKey: boolean): void;
    selectDownwards(shiftKey: boolean): void;
    hideCursor(): void;
    showCursor(cursor: Cursor): void;
    scrollToId(id: string): void;
    open(id: string): void;
    openParents(id: string): void;
    get visibleIds(): string[];
    get idToIndex(): {
        [id: string]: number;
    };
    get visibleNodes(): Node<unknown>[];
}
