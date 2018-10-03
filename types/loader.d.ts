import * as EMModule from './emmodule';
export as namespace loader;

export declare interface EMModule {}

export declare function loadFile(url: string, type: 'text'): Promise<string>;
export declare function loadFile(url: string, type: 'blob'): Promise<Blob>;
export declare function loadFile(url: string, type: 'arrayBuffer'): Promise<ArrayBuffer>;

export function loadWebAssembly(url: string, imports: any): any;

export function loadWasmJSByCallback(jsURL: string, wasmURL?: string, successCB?: (module: EMModule) => any, errorCB?: (error: any) => any): void;
export function loadWasmJS(fileKey: string): Promise<EMModule>;
export function loadAsmJS(fileKey: string): Promise<EMModule>;
export function loadWasmModule(fileKey: string): Promise<EMModule>;