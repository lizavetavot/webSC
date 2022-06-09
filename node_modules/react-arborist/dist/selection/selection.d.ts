import { Range } from "./range";
declare type SelectionDirection = "forward" | "backward" | "none";
export declare type SelectionData = {
    ranges: [number, number][];
    currentIndex: number | null;
    direction: SelectionDirection;
};
export declare class Selection {
    ranges: Range[];
    currentIndex: number | null;
    direction: SelectionDirection;
    items: any[];
    static parse(data: SelectionData | null, items: any[]): Selection;
    constructor(ranges?: [number, number][], currentIndex?: number | null, direction?: SelectionDirection, items?: any[]);
    get current(): Range | null;
    select(n: number): void;
    multiSelect(n: number): void;
    deselect(n: number): void;
    getSelectedItems<T>(): T[];
    extend(n: number): void;
    contains(n: number | null): boolean;
    getRanges(): [number, number][];
    clear(): void;
    serialize(): SelectionData;
    isEqual(other: Selection): boolean;
    private addRange;
    private removeRange;
    private isEmpty;
    getAnchor(): number | null;
    getFocus(): number;
    private compact;
}
export {};
