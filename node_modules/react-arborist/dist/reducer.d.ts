import { Cursor } from "./dnd/compute-drop";
import { StateContext } from "./types";
export declare const initState: () => StateContext;
export declare const actions: {
    setCursorLocation: (cursor: Cursor) => {
        type: "SET_CURSOR_LOCATION";
        cursor: Cursor;
    };
    setVisibleIds: (ids: string[], idMap: {
        [id: string]: number;
    }) => {
        type: "SET_VISIBLE_IDS";
        ids: string[];
        idMap: {
            [id: string]: number;
        };
    };
    select: (index: number | null, meta: boolean, shift: boolean) => {
        type: "SELECT";
        index: number | null;
        meta: boolean;
        shift: boolean;
    };
    selectId: (id: string) => {
        type: "SELECT_ID";
        id: string;
    };
    edit: (id: string | null) => {
        type: "EDIT";
        id: string | null;
    };
    stepUp: (shift: boolean, ids: string[]) => {
        type: "STEP_UP";
        shift: boolean;
    };
    stepDown: (shift: boolean, ids: string[]) => {
        type: "STEP_DOWN";
        shift: boolean;
    };
};
declare type ActionObj = {
    [Prop in keyof typeof actions]: ReturnType<typeof actions[Prop]>;
};
export declare type Action = ActionObj[keyof ActionObj];
export declare function reducer(state: StateContext, action: Action): StateContext;
export {};
