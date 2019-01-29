import pSome from 'p-some';
import pAny from 'p-any';
import fetch from './fetch';

export interface ElectOptions {
  timeout?: number;
  retries?: number;
  checkPath?: string;
}

export interface ElectSomeOptions extends ElectOptions {
  count?: number;
}

export interface ElectAnyOptions extends ElectOptions {
  prefer?: string;
}

const DEFAULT_OPTIONS: ElectOptions = {
  timeout: 7777,
  retries: 1,
  checkPath: '',
};

const DEFAULT_SOME_OPTIONS: ElectSomeOptions = {
  ...DEFAULT_OPTIONS,
  count: 1,
};

const DEFAULT_ANY_OPTIONS: ElectAnyOptions = {
  ...DEFAULT_OPTIONS,
};

export const electSome = (
  urls: string[],
  options: ElectSomeOptions = DEFAULT_SOME_OPTIONS,
): Promise<any[]> => {
  options = {...DEFAULT_SOME_OPTIONS, ...options};
  const allChecks = urls.map(url => {
    const path = options ? options.checkPath : '';
    const finalUrl = `${url}/${path}`;
    return fetch(finalUrl, options as any).then(() => finalUrl);
  });
  return pSome(allChecks, {count: options.count || 1});
};

export const electAny = (
  urls: string[],
  options: ElectAnyOptions = DEFAULT_ANY_OPTIONS,
): Promise<any> => {
  options = {...DEFAULT_ANY_OPTIONS, ...options};
  const allChecks = urls.map(url => {
    const path = options ? options.checkPath : '';
    const finalUrl = `${url}/${path}`;
    return fetch(finalUrl, options as any).then(() => finalUrl);
  });
  return pAny(allChecks);
};
