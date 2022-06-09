import { ConnectDragSource } from "react-dnd";
import { Node } from "../types";
export declare function useDragHook(node: Node): [{
    isDragging: boolean;
}, ConnectDragSource];
