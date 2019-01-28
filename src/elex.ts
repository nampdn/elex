import pSome from 'p-some';
import pAny from 'p-any';

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

export const electSome = (
  urls: string[],
  options?: ElectSomeOptions,
): Promise<any[]> => {
  const allChecks = urls.map(url => {
    const path = options ? options.checkPath : '';
    return `${url}/${path}`;
  });
  return pSome(allChecks, {count: 1});
};

export const electOne = (
  urls: string[],
  options?: ElectOneOptions,
): Promise<any> => {
  const allChecks = urls.map(url => {
    const path = options ? options.checkPath : '';
    return `${url}/${path}`;
  });
  return pAny(allChecks);
};
