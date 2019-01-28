export interface ElectOptions {
    retries?: number;
    checkPath?: string;
}
export interface ElectSomeOptions extends ElectOptions {
    count?: number;
}
export interface ElectOneOptions extends ElectOptions {
    prefer?: string;
}
export declare const electSome: (urls: string[], options?: ElectSomeOptions | undefined) => Promise<any[]>;
export declare const electOne: (urls: string[], options?: ElectOneOptions | undefined) => Promise<any>;
