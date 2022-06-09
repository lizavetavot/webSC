import { Node } from "./types";
export declare function bound(n: number, min: number, max: number): number;
export declare const isFolder: (node: Node<any>) => boolean;
export declare function isItem(node: Node | null): boolean | null;
export declare function isClosed(node: Node | null): boolean | null;
/**
 * Is first param a decendent of the second param
 */
export declare const isDecendent: (a: Node, b: Node) => boolean;
export declare const indexOf: (node: Node) => number;
export declare function noop(): void;
