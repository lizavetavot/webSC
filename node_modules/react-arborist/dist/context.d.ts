/// <reference types="react" />
import { Cursor } from "./dnd/compute-drop";
import { IdObj, SelectionState, StaticContext } from "./types";
export declare const CursorParentId: import("react").Context<string | null>;
export declare function useCursorParentId(): string | null;
export declare const IsCursorOverFolder: import("react").Context<boolean>;
export declare function useIsCursorOverFolder(): boolean;
export declare const CursorLocationContext: import("react").Context<Cursor | null>;
export declare function useCursorLocation(): Cursor | null;
export declare const Static: import("react").Context<StaticContext<IdObj> | null>;
export declare function useStaticContext(): StaticContext<IdObj>;
export declare const DispatchContext: import("react").Context<null>;
export declare function useDispatch(): never;
export declare const SelectionContext: import("react").Context<SelectionState | null>;
export declare function useSelectedIds(): string[];
export declare function useIsSelected(): (index: number | null) => boolean;
export declare const EditingIdContext: import("react").Context<string | null>;
export declare function useEditingId(): string | null;
