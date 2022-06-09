import { TreeProps, IdObj, Node } from "../types";
export declare function enrichTree<T extends IdObj>(model: T, hideRoot?: boolean, getChildren?: TreeProps<T>["getChildren"], isOpen?: TreeProps<T>["isOpen"], disableDrag?: TreeProps<T>["disableDrag"], disableDrop?: TreeProps<T>["disableDrop"], openByDefault?: boolean): Node<T>;
