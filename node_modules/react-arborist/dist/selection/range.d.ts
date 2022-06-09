export declare class Range {
    start: number;
    end: number;
    constructor(start: number, end: number);
    serialize(): [number, number];
    contains(n: number): boolean;
    overlaps(r: Range): boolean;
    combine(r: Range): void;
    get size(): number;
    clone(): Range;
    map(fn: (index: any) => string): any;
    isEqual(other: Range): boolean;
}
