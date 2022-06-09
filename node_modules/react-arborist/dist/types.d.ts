import React, { ComponentType, CSSProperties, MouseEvent, MouseEventHandler, MutableRefObject, ReactElement, Ref } from "react";
import { FixedSizeList } from "react-window";
import { Cursor } from "./dnd/compute-drop";
import { SelectionData } from "./selection/selection";
import { TreeApi } from "./tree-api";
declare module "react" {
    function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
export declare type Node<T = unknown> = {
    id: string;
    model: T;
    level: number;
    children: Node<T>[] | null;
    parent: Node<T> | null;
    isOpen: boolean;
    isDraggable: boolean;
    isDroppable: boolean;
    rowIndex: number | null;
};
export declare type NodesById<T> = {
    [id: string]: Node<T>;
};
export interface IdObj {
    id: string;
}
export declare type NodeRendererProps<T> = {
    innerRef: (el: HTMLDivElement | null) => void;
    styles: {
        row: CSSProperties;
        indent: CSSProperties;
    };
    data: T;
    state: NodeState;
    handlers: NodeHandlers;
    tree: TreeApi<T>;
    preview: boolean;
};
export declare type NodeState = {
    isOpen: boolean;
    isSelected: boolean;
    isHoveringOverChild: boolean;
    isDragging: boolean;
    isSelectedStart: boolean;
    isSelectedEnd: boolean;
    isEditing: boolean;
};
export declare type NodeHandlers = {
    toggle: MouseEventHandler;
    select: (e: MouseEvent, args: {
        selectOnClick: boolean;
    }) => void;
    edit: () => Promise<EditResult>;
    submit: (name: string) => void;
    reset: () => void;
};
export declare type NodeRenderer<T> = ComponentType<NodeRendererProps<T>>;
export declare type MoveHandler = (dragIds: string[], parentId: string | null, index: number) => void;
export declare type ToggleHandler = (id: string, isOpen: boolean) => void;
export declare type EditHandler = (id: string, name: string) => void;
export declare type NodeClickHandler<T> = (e: MouseEvent, n: Node<T>) => void;
export declare type IndexClickHandler = (e: MouseEvent, index: number) => void;
export declare type SelectedCheck = (index: number) => boolean;
export declare type CursorLocation = {
    index: number | null;
    level: number | null;
    parentId: string | null;
};
export declare type DragItem = {
    dragIds: string[];
    id: string;
};
export declare type SelectionState = {
    data: SelectionData | null;
    ids: string[];
};
export declare type StateContext = {
    cursor: Cursor;
    editingId: string | null;
    selection: SelectionState;
    visibleIds: string[];
};
export interface TreeProps<T> {
    children: NodeRenderer<T>;
    data: T;
    height?: number;
    width?: number;
    rowHeight?: number;
    indent?: number;
    hideRoot?: boolean;
    onToggle?: ToggleHandler;
    onMove?: MoveHandler;
    onEdit?: EditHandler;
    getChildren?: string | ((d: T) => T[]);
    isOpen?: string | ((d: T) => boolean);
    disableDrag?: string | boolean | ((d: T) => boolean);
    disableDrop?: string | boolean | ((d: T) => boolean);
    openByDefault?: boolean;
    className?: string | undefined;
    handle?: Ref<TreeApi<T>>;
    onClick?: MouseEventHandler;
    onContextMenu?: MouseEventHandler;
}
export declare type TreeProviderProps<T> = {
    imperativeHandle: React.Ref<TreeApi<T>> | undefined;
    children: ReactElement;
    height: number;
    indent: number;
    listEl: MutableRefObject<HTMLDivElement | null>;
    onToggle: ToggleHandler;
    onMove: MoveHandler;
    onEdit: EditHandler;
    onClick?: MouseEventHandler;
    onContextMenu?: MouseEventHandler;
    renderer: NodeRenderer<any>;
    rowHeight: number;
    root: Node<T>;
    width: number;
};
export declare type StaticContext<T> = TreeProviderProps<T> & {
    api: TreeApi<T>;
    list: MutableRefObject<FixedSizeList | undefined>;
};
export declare type EditResult = {
    cancelled: true;
} | {
    cancelled: false;
    value: string;
};
