import { AxiosResponse } from 'axios';
export declare const fetch: (url: string, timeout?: number, retries?: number) => Promise<AxiosResponse<any>>;
