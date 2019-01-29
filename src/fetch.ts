import axios, {AxiosResponse} from 'axios';
import pRetry from 'p-retry';

export const fetch = async (
  url: string,
  options?: any,
): Promise<AxiosResponse<any>> => {
  const toFetch = async (): Promise<AxiosResponse<any>> => {
    const response = await axios.request({url, ...options});
    if (response.status === 404) {
      throw new pRetry.AbortError(response.statusText);
    }
    return response;
  };
  return pRetry(toFetch, {
    retries: options.retries || 1,
    onFailedAttempt: (error: any) => {
      console.info(
        `Fetch ${url} ${error.attemptNumber}/${(error as any).retriesLeft} failed.`,
      );
    },
  });
};

export default fetch;
